var taskRepo = require('../repositories/task-repo');

module.exports = {
    list: async function (req, res, next) {
        await taskRepo.list().then(data => {
            res.send(data);
        })
    },

    new: async function (req, res, next) {
        await taskRepo.new(req.body).then(data => {
            res.send(data)
        });
    }
}