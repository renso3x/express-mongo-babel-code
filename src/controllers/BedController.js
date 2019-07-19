import BedConfiguration from '../models/BedConfiguration';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const beds = await BedConfiguration.find({});
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: beds
    });
    return res.send(successResponse);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}

export async function getById(req, res) {
  try {
    if (!req.bed) {
      const errorReponse = Object.assign({}, ERROR_MESSAGE, {
        message: "Sorry we cannot find the genre you're looking for"
      });
      return res.send(errorReponse);
    }
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: req.bed
    });
    return res.send(successResponse);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}

export async function save(req, res) {
  try {
    const newBedConfig = new BedConfiguration(req.body);

    await newBedConfig.save();

    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      message: newBedConfig.name
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
    const bed = await BedConfiguration.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      quantity: req.body.quantity,
    }, { new: true });

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: bed
    });

    return res.send(response);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}

export async function deleteById(req, res) {
  try {
    if (!req.bed) {
      const errorReponse = Object.assign({}, ERROR_MESSAGE, {
        message: "Sorry we cannot find the genre you're looking for"
      });
      return res.send(errorReponse);
    }
    await BedConfiguration.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }

}