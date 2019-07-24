import moment from 'moment';
import {
  Room,
  Customer,
  RoomExtra,
  Reservation
} from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const reservation = await Reservation.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: reservation
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
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      throw new Error('Sorry we cannot find the room.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: reservation
    });
    return res.send(response)
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function save(req, res) {
  try {
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) {
      throw new Error('Sorry, we cannot find the customer.');
    }
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room.');
    }

    let extras = [];
    if (req.body.extras) {
      // features
      const getExtras = Promise.all(req.body.extras.map(async g => {
        const extraObj = await RoomExtra.findById(g);
        return {
          _id: extraObj.id,
          name: extraObj.name
        };
      }));

      extras = await getExtras;
    }

    const reservation = new Reservation({
      customer: {
        _id: customer._id,
        firstName: customer.firstName,
        lastName: customer.lastName,
      },
      room: {
        _id: room._id,
        name: room.name,
      },
      checkin: moment(new Date(req.body.checkin)).format('YYYY-MM-DD'),
      extras: extras.length > 0 ? extras : [],
      status: req.body.status
    });

    await reservation.save();

    res.send(SUCCESS_MESSAGE);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function findCustomer(req, res) {
  try {
    // Look up for an embedded object
    const reservation = await Reservation.lookupCustomer(req.body.lastName);
    if (!reservation) {
      throw new Error('Sorry we cannot find the reservation.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: reservation
    });
    return res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function findRoom(req, res) {
  try {
    // Look up for an embedded object
    const reservation = await Reservation.lookupRoom(req.body.roomName);
    if (!reservation) {
      throw new Error('Sorry we cannot find the reservation.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: reservation
    });
    return res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function update(req, res) {
  try {
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) {
      throw new Error('Sorry, we cannot find the customer.');
    }
    const room = await Room.findById(req.body.roomId);
    if (!room) {
      throw new Error('Sorry, we cannot find the room.');
    }

    let extras = [];
    if (req.body.extras) {
      const getExtras = Promise.all(req.body.extras.map(async g => {
        const extraObj = await RoomExtra.findById(g);
        return {
          _id: extraObj.id,
          name: extraObj.name
        };
      }));

      extras = await getExtras;
    }

    const reservation = await Reservation.findByIdAndUpdate(req.params.id, {
      customer: {
        _id: customer._id,
        firstName: customer.firstName,
        lastName: customer.lastName,
      },
      room: {
        _id: room._id,
        name: room.name,
      },
      checkin: moment(new Date(req.body.checkin)).format('YYYY-MM-DD'),
      checkout: moment(new Date(req.body.checkout)).format('YYYY-MM-DD'),
      extras: extras.length > 0 ? extras : [],
      status: req.body.status
    }, { new: true });

    if (!reservation) {
      throw new Error('Sorry, we cannot find your data.');
    }

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: reservation
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
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await Reservation.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}