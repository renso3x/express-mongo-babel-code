import { Customer } from '../models';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../constants/responses';

export async function get(req, res) {
  try {
    const customers = await Customer.find({});
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: customers
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
    const customer = new Customer(req.body);

    await customer.save();

    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function getById(req, res) {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      throw new Error('Sorry, we cannot find what you\'re looking for.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: customer
    });
    res.send(response);
  } catch (e) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(response);
  }
}

export async function update(req, res) {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id,
      req.body, {
        new: true
      });

    if (!customer) {
      throw new Error('Sorry, we cannot find your data.');
    }
    const response = Object.assign({}, SUCCESS_MESSAGE, {
      data: customer
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
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      throw new Error('Sorry, we cannot find your data.');
    }
    await Customer.findByIdAndRemove(req.params.id);
    return res.send(SUCCESS_MESSAGE);

  } catch (e) {
    const errorReponse = Object.assign({}, ERROR_MESSAGE, {
      message: e.message
    });
    return res.send(errorReponse);
  }
}