import bcrpyt from 'bcrypt';
import { User } from '../models';
import { ERROR_MESSAGE } from '../constants/responses';

export async function authenticate(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isValidPassword = await bcrpyt.compare(req.body.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }
    user.generateAuthToken(token => {
      return res.send(token);
    });

  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });

    return res.send(response);
  }
}