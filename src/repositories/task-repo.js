var task = require('../../database/models/').tasks;
const Sequelize = require('sequelize');

module.exports = {
    list: async function () {
        return await task.findAll().then(
            data => {
                return data;
            }
        );
    },

    new: async function (data) {
        return await task.create(data).then((result) => {
            return result;
        });
    }
}