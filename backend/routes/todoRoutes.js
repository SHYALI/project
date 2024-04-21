const express = require('express');

const { createTodo, completed, todos } = require('../controllers/todoControllers')

const router = express.Router();

router.route("/todo").post(createTodo);
router.route("/todos").get(todos);
router.route("/completed").put(completed);

module.exports = router;