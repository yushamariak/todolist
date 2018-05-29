var userRepo = require('../repositories/user-repo');

module.exports = {
    list: async function (req, res, next) {
        await userRepo.list().then(data => {
            res.send(data);
        })
    },

    new: async function (req, res, next) {
        await userRepo.new(req.body).then(data => {
            res.send(data)
        });
    }
}