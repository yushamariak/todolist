const express = require('express');
const router = express.Router();
const TaskCtrl = require('../controllers/task-ctrl');
const UserCtrl = require('../controllers/user-ctrl');

router.get('/tasks/list', TaskCtrl.list);
router.post('/tasks/insert', TaskCtrl.new);
router.get('/users/list', UserCtrl.list);
router.post('/users/insert', UserCtrl.new);

module.exports = router;