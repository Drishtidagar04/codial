const mongoose = require('mongoose');

const db = mongoose.connection;
db.on (console.error.bind(console,"error connecting to mongo db"));
db.once('open' ,function(){
    console.log('connected to database :: mongo db');
    module.exports = db;
})

