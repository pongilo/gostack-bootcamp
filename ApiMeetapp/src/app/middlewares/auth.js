import jwt from 'jsonwebtoken';
import { promisify } from 'util';
// Importa do note, ela pega uma função de callback e transforma em uma fanção que possa ser usado o async await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se o token foi passado no header
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // So é possivel dessa forma por vausa do promisify
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // Dentro do decoded estão todas as informações passamos dentro do payload da session, o id do usuario

    // Incluir o id do usuario dentro da req
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
