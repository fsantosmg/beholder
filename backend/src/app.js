const express = require('express');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const settingsController = require("./controllers/settingsController");

require('express-async-errors')

const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());


app.post('/login', authController.doLogin);

app.get('/settings', authMiddleware, settingsController.getSettings);

app.post('/logout', authController.doLogout);

app.use(require('./middlewares/errorMiddleware'));

/*
app.use('/erro', (req, res, next) => {
    throw new Error('Teste Erro')
})

app.use('/', (req, res, next) => {
    res.send('Hello, world');
})
*/



module.exports = app;
