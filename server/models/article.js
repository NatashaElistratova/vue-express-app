const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Geolocation schema
const GeoSchema = new Schema({
    type:{
        type:  String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index: "2dsphere"
    }
});

//Article Schema
const ArticleSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required']
    },
    body:{
        type: String,
        required: true
    },
    geometry: GeoSchema
});

let Article = mongoose.model('article', ArticleSchema);
module.exports = Article;