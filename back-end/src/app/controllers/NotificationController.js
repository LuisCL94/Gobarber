import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async list(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if(!checkUserProvider) {
      return res
      .status(401)
      .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    }).sort({ createdAt: 'desc' }).limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();