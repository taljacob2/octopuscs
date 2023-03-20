const connectAsync = require('./src/data-access-layer/dal')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const itemsRouter = require('./src/controllers/items-controller');

// Configure environment variables.
dotenv.config()

// Use JSON as default body.
app.use(express.json());

// Configure CORS middleware.
app.use('*', function (req, res, next) {    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
});

// Route to "static" directory.
app.use(express.static('src/static'));

// Define main router. Main page.
app.get('/', (req, res) => {
    res.sendFile('./src/static/index.html', { root: __dirname })
})

// Define routers
app.use('/api/items', itemsRouter);

// Start app while verifying connection to the database.
const PORT = process.env.NODE_LOCAL_PORT
app.listen(PORT, () => {
    connectAsync().then(() => {
        console.log(`App listening on port ${PORT}...`)
    })    
})

module.exports = app