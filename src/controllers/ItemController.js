import { Item } from '../models';
import { PostsService } from '../services';

function search(req, res) {
  let conditions;
  if (req.query.code) {
    conditions = {
      code: req.query.code
    };
  }
  
  Item.find(conditions)
    .then(items => {
      res.status(200).json({
        items
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    });
}

function get(req, res) {
  const code = req.params.code;
  const options = {
    code
  };

  Item.findOne(options)
    .then(item => {
      const result = item || {};
      res.status(200).json({
        item: result
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    });
}

function create(req, res) {
  const item = req.body;

  Item.create(item) 
    .then(item => {
      res.status(200).json({
        item
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    });
}

function update(req, res) {
  const conditions = {
    code: req.params.code
  };
  const item = req.body;
  const options = {
    new: true
  }

  Item.findOneAndUpdate(conditions, item, options)
    .then(item => {
      res.status(200).json({
        item
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    });
}

function getFromSampleApi(req, res) {
  PostsService.getPosts()
    .then(result => {
      console.log(result);
      res.status(200).json({
        posts: result
      });
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        error: err
      });
    });
}

module.exports = {
  search,
  get,
  create,
  update,
  getFromSampleApi
};