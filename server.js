require('dotenv').config; // loading environment variables
const express = require('express'); // import express framework
// const morgan = require('morgan'); // for some reason it runs without this code
const MoveRouter = require('./controllers/move');
const UserRouter = require('./routes/user');
const methodOverride = require('method-override');
// const middleware = require('./utils/middleware'); // for some reason it runs without this code
const registerControllers = require('./utils/registercontrollers');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// REGISTER APP OBJECT
const app = express();

// REGISTER MIDDLEWARE
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false
}))
app.use(express.static('public'))
app.use(express.urlencoded());
app.use(methodOverride('_method'))
// app.use(morgan('morgan')) // for some reason it runs without this code
// app.use(middleware('middleware')) // for some reason it runs without this code

app.get('/', (req, res) => {
    res.render('index.ejs')
})

// REGISTER ROUTES/CONTROLLERS
registerControllers(app);

// LISTENER //
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })