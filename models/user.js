const r = require('../db');

module.exports = {
    getAll: () => {
        return r.table('users').run()
    },
    getById: (id) => {
        return r.table('users').get(id).run()
    },
    createUser: (data) => {
        return r.table('users').insert(data).run();
    }
}

