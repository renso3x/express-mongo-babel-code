import { Rate, Room } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const packages = await Rate.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: packages
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
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room');
    }

    const rate = new Rate({
      room: {
        _id: room._id,
        name: room.name
      },
      minGuest: req.body.minGuest,
      maxGuest: req.body.maxGuest,
      price: req.body.price,
      rateName: req.body.rateName,
      description: req.body.description
    });

    await rate.save();

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
    const rate = await Rate.findById(req.params.id);
    if (!rate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: rate
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
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room');
    }

    const rate = await Rate.findByIdAndUpdate(req.params.id, {
      room: {
        _id: room._id,
        name: room.name
      },
      minGuest: req.body.minGuest,
      maxGuest: req.body.maxGuest,
      price: req.body.price,
      rateName: req.body.rateName,
      description: req.body.description
    }, { new: true });

    if (!rate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: rate
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
    const rate = await Rate.findById(req.params.id);

    if (!rate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await Rate.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}