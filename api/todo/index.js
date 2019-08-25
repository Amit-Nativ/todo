const controller = require('./todo.controller');
const express = require('express');
const router = express.Router();

router.get('/api/todo', (req, res) => res.end(controller.get()));
router.post('/api/todo', (req, res) => res.end(controller.create()));
router.put('/api/todo', (req, res) => res.end(controller.update()));
router.delete('/api/todo', (req, res) => res.end(controller.remove()));

module.exports = router;