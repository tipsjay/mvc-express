const rethinkdbdash = require('rethinkdbdash');

module.exports = rethinkdbdash({
    host: 'localhost',
    port: 28015,
    database: 'test'
})
