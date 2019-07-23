import { PackageRate, Room } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const packages = await PackageRate.find({});
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

    const packages = new PackageRate({
      name: req.body.name,
      room: {
        _id: room._id,
        name: room.name
      },
      date_in: req.body.date_in,
      date_out: req.body.date_out,
      description: req.body.description
    });

    await packages.save();

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
    const packageRate = await PackageRate.findById(req.params.id);
    if (!packageRate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: packageRate
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

    const packageRate = await PackageRate.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      room: {
        _id: room._id,
        name: room.name
      },
      date_in: req.body.date_in,
      date_out: req.body.date_out,
      description: req.body.description
    }, { new: true });

    if (!packageRate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: packageRate
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
    const packageRate = await PackageRate.findById(req.params.id);

    if (!packageRate) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await PackageRate.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}