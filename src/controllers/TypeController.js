import { Type } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const types = await Type.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      types
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
    const type = new Type(req.body);
    const data = await type.save();

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      type: data
    });

    return res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function getById(req, res) {
  try {
    const type = await Type.findById(req.params.id);
    if (!type) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: type
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
    const type = await Type.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!type) {
      throw new Error('Sorry, we cannot find your data.');
    }

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      type
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
    const type = await Type.findById(req.params.id);

    if (!type) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await Type.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}
