// require dependencies below
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive');
require('dotenv').config();

// require controllers below
const controller = require('./controllers/controller');

//require middlewares below


const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// dependency-based middlewares below
app.use(bodyParser.json());
app.use(session({
    secret: 'themoosewalksbackwardintherain',
    resave: false,
    saveUninitialized: true
}));

// user-created middlewares below


// endpoints below (make sure this is what they're called)
app.post('/api/users', controller.create)
// app.get('/api/something', controller.something)
// app.put('/api/something', controller.something)
// app.delete('/api/something', controller.something)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}.`));