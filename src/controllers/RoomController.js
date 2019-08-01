
import {
  Room, Type, Feature,
  Image, BedConfiguration
} from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const rooms = await Room.find({}).cache({ key: req.user._id });
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: rooms
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
    const room = await Room.findById(req.params.id);
    if (!room) {
      throw new Error('Sorry we cannot find the room.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: room
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
    // type
    const type = await Type.findById(req.body.typeId);
    if (!type) {
      throw new Error('Sorry, we cannot find the type.');
    }

    // features
    const getFeatures = Promise.all(req.body.features.map(async g => {
      const feature = await Feature.findById(g);
      return {
        _id: feature.id,
        name: feature.name
      };
    }));

    const features = await getFeatures;

    // bed config
    const bedConfig = await BedConfiguration.findById(req.body.bedConfigId);
    if (!bedConfig) {
      throw new Error('Sorry, we cannot find the bed configuration.');
    }

    const room = new Room({
      name: req.body.name,
      type: {
        _id: type._id,
        name: type.name
      },
      maxRoom: req.body.maxRoom,
      description: req.body.description,
      roomSize: req.body.roomSize,
      features: features.length > 0 ? features : [],
      bedConfig: {
        _id: bedConfig._id,
        name: bedConfig.name,
        quantity: bedConfig.quantity
      }
    });

    await room.save();

    res.send(SUCCESS_MESSAGE);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function update(req, res) {
  try {
    // type
    const type = await Type.findById(req.body.typeId);
    if (!type) {
      throw new Error('Sorry, we cannot find the type.');
    }

    // features
    const getFeatures = Promise.all(req.body.features.map(async g => {
      const feature = await Feature.findById(g);
      return {
        _id: feature.id,
        name: feature.name
      };
    }));

    const features = await getFeatures;

    // bed config
    const bedConfig = await BedConfiguration.findById(req.body.bedConfigId);
    if (!bedConfig) {
      throw new Error('Sorry, we cannot find the bed configuration.');
    }

    const room = await Room.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      type: {
        _id: type._id,
        name: type.name
      },
      maxRoom: req.body.maxRoom,
      description: req.body.description,
      roomSize: req.body.roomSize,
      features: features.length > 0 ? features : [],
      bedConfig: {
        _id: bedConfig._id,
        name: bedConfig.name,
        quantity: bedConfig.quantity
      }
    }, { new: true });

    if (!room) {
      throw new Error('Sorry, we cannot find your data.');
    }

    await room.save();

    res.send(SUCCESS_MESSAGE);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}