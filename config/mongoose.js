// const mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/codeiall_list_db");
// const db = mongoose.connection;
// db.on('error',console.log.bind("Error in connecting to mongo db"));
// db.once('open' ,function(){
//     console.log('Connected to database:: MongoDB');
// });
// module.exports =db;
const mongoose = require('mongoose');
mongoose.set('strictQuery' , true);
// mongoose.connect('mongodb://localhost/codeial_development');
mongoose.connect("mongodb://0.0.0.0:27017/Drishti_codeiall_list_db");
// mongoose.connect(`mongodb://0.0.0.0:27017/${env.db}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;