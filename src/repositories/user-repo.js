var user = require('../../database/models/').users;

module.exports = {
    list: async function () {
        return await user.findAll().then(data => {
            return data;
        });
    },

    new: async function (usuario) {
        return await user.create(usuario).then(data => {
            return data;
        })
    }
}