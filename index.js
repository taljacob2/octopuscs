const express = require('express')
const app = express()

/** @see https://masteringjs.io/tutorials/express/express-json */
app.use(express.json());

/** 
 * Configure CORS middleware.
 * 
 * @see https://stackoverflow.com/a/37228330/14427765
 */
app.use('*', function (req, res, next) {    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
});

/** Route to "static" directory. */
app.use(express.static('src/static'));

const statsRouter = require('./src/router/stats/stats');
app.use('/stats', statsRouter);

const emailRouter = require('./src/router/email/email');
app.use('/email', emailRouter);

/**
 * Defines main router. Main page.
 * 
 * @example
 * https://sz2ifw.deta.dev
 */
app.get('/', (req, res) => {
    // #swagger.description = 'Main page.'

    res.sendFile('./src/static/index.html', { root: __dirname })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`)
})

module.exports = app