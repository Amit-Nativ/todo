const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/api/user', (req, res) => res.end(controller.get()));
router.post('/api/user', (req, res) => res.end(controller.create()));
router.put('/api/user', (req, res) => res.end(controller.update()));
router.delete('/api/user', (req, res) => res.end(controller.remove()));

module.exports = router;