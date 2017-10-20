const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive');

// const controller = require('./controller);

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'themoosewalksbackwardintherain',
    resave: false,
    saveUninitialized: true
}));
// app.use(express.static( __dirname + path));


// app.post('/api/something', controller.something)
// app.get('/api/something', controller.something)
// app.put('/api/something', controller.something)
// app.delete('/api/something', controller.something)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}.`));