import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findOneAndUpdate(
      req.param.id, // id da notificação a ser atualizada,
      { read: true }, // Valor q sera atualizado
      { new: true } // Faz retornar os dados atualizados
    );

    return res.json(notification);
  }
}

export default new NotificationController();
