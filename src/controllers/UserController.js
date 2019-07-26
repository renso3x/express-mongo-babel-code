import _ from 'lodash';
import bcrpyt from 'bcrypt';
import { User } from '../models';
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const users = await User.find({});

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: users
    });

    return res.send(response);
  } catch (e) {
    return res.send(ERROR_MESSAGE);
  }
}

export async function save(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      throw new Error('User already registered.')
    }

    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrpyt.genSalt(10);
    user.password = await bcrpyt.hash(user.password, salt);

    await user.save();

    // send the auth token
    return user.generateAuthToken(token => {
      res
        .header('x-auth-token', token)
        .send(_.pick(user, ['_id', 'name', 'email']));
    });
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    })
    return res.send(response);
  }
}

export async function me(req, res) {
  try {
    //get user object in req.user
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    })
    return res.send(response);
  }
}
