const express = require('express');
const userController = require('./api/user/index');
const todoController = require('./api/todo/index');
const logger = require('./middleware/logger');
const app = express();
const PORT = 9090;

app.use(logger.logRequest);
app.use(userController, todoController);
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));