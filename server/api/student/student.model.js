'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  major: String
});

module.exports = mongoose.model('Student', StudentSchema);
