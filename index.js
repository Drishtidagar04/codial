const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db =require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src :'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle :'extended',
    prefix : '/css'

}))
app.use(express.urlencoded());
app.use (cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
   name : 'codial',
   secret : 'nothing',
   saveUninitialized:false,
   resave :false,
   cookie:{
    maxAge :(1000*60*100)
   },
   store: new MongoStore(
    {
      //  mongooseConnection: db,
       // autoRemove: 'disable'
       mongoUrl: "mongodb://0.0.0.0:27017/codeiall_list_db",
    },

function(err) {
    console.log(err || 'connect-mongodb setup ok')
}
),

}));
app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));

app.listen(port , function(err){
    if (err){
        console.log(`Error in the running server : ${err}`);
    }
    console.log(`Server is running in the port : ${port}`);

});