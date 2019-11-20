import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Pq quando o usuario for se autenticar na aplicação ele vai passar o e-mail e a senha
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    // Verifica se existe usuario cadastrado com esse email
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Precisa ser feito a verificação de senha.
    // Essa verificação poderia ser feita aqui no controller e teria que importar o bycript novamente
    // Mas como essa vericação não é bem uma regra de negocio, então pode ser feito dentro do model de usuário

    // Verifica se a senha não esta batendo, chamando o metodo checkPassword do controller que compara a penha digitada com o hash de da base
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn, // data de expição do token
      }),
    });
    // Parametro do jwt.sign são Payload.
    // Payload são informações adicionais que nos queremos adicionar dentro do token
  }
}

export default new SessionController();
