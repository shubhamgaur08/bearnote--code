const mongoose = require('mongoose');


const mongoURI ="mongodb+srv://super1:super1@super1.h6clu09.mongodb.net/Bearnote?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;