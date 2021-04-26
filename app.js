// Bring in our dependencies
const express = require('express')
const app = express()
const routes = require('./routes')
const port = 3306

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: "8mb",
}));

//  Connect all our routes to our application
app.use('/', routes)
app.use('/book', routes)
app.use('/book/:id', routes)

// Turn on that server!
app.listen(port, () => console.log(`Example app listening on port ${port}!`))