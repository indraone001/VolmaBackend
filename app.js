// Bring in our dependencies
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const port = 3000

//cors
app.use(cors())

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

app.use('/mahasiswa', routes)
app.use('/mahasiswa/:id', routes)
app.use('/kandidat', routes)
app.use('/kandidat/:id', routes)

// Turn on that server!
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))