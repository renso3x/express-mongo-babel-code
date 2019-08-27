import uuidv4 from 'uuid/v4';
import { Accomodation } from '../models';
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const accomodations = await Accomodation.find();
    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      data: accomodations
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
    const accomodation = new Accomodation({
      ...req.body,
      _id: uuidv4(),
      type: req.body.accomodationTypeId
    });

    await accomodation.save();

    const successResponse = Object.assign({}, SUCCESS_MESSAGE, {
      accomodation
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
    const accomodation = await Accomodation.findByIdAndUpdate(
      req.params.id,
      { ...req.body, type: req.body.accomodationTypeId },
      { new: true }
    );

    const response = Object.assign({}, SUCCESS_MESSAGE, {
      accomodation
    });

    return res.send(response);
  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}
