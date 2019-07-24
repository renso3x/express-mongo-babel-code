import { RoomExtra } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const roomExtra = await RoomExtra.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: roomExtra
    });
    return res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function save(req, res) {
  try {
    const extra = new RoomExtra({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    });

    await extra.save();

    res.send(SUCCESS_MESSAGE);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function getById(req, res) {
  try {
    const extras = await RoomExtra.findById(req.params.id);
    if (!extras) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: extras
    });
    return res.send(successResponse);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}

export async function update(req, res) {
  try {
    const extras = await RoomExtra.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }, { new: true });

    if (!extras) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: extras
    });

    return res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function deleteById(req, res) {
  try {
    const extras = await RoomExtra.findById(req.params.id);

    if (!extras) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await RoomExtra.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}