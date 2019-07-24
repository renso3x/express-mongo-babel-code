import moment from 'moment';
import { RoomAvailability, Room } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const availability = await RoomAvailability.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: availability
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

    const availability = new RoomAvailability({
      room: {
        _id: room._id,
        name: room.name
      },
      date: moment(new Date(req.body.date)).format('YYYY-MM-DD'),
      price: req.body.price,
    });

    await availability.save();

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
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room');
    }
    const availability = new RoomAvailability({
      room: {
        _id: room._id,
        name: room.name
      },
      date: moment(new Date(req.body.date)).format('YYYY-MM-DD'),
      price: req.body.price,
    });

    if (!availability) {
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
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room');
    }

    const availability = await RoomAvailability.findByIdAndUpdate(req.params.id, {
      room: {
        _id: room._id,
        name: room.name
      },
      date: moment(new Date(req.body.date)).format('YYYY-MM-DD'),
      price: req.body.price,
    }, { new: true });

    if (!availability) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: availability
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
    const availability = await RoomAvailability.findById(req.params.id);

    if (!availability) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await RoomAvailability.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}