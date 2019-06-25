const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DocsSchema = new Schema({
    message: String
});

const Docs       = mongoose.model('doc', DocsSchema);
module.exports = {
    Docs
};