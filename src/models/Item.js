import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: 'String'
  },

  code: {
    type: 'String',
    unique: true
  },

  active: {
    type: 'Boolean'
  }
});

itemSchema.statics.search = function() {
  return this.find({});
};

const Item = mongoose.model('Item', itemSchema);

export default Item;