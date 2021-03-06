const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a Name'],
    trim: true,
    maxlength: [20, 'Name cannot have more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
});

//mongoose model
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. SO, the model Task is for the tasks collection in the mongoDB database.
module.exports = mongoose.model('Task', TaskSchema)


