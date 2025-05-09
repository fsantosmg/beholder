const express = require('express');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const morgan = require('morgan');

require('express-async-errors')

const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN}));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));


const settingsRouter = require('./routers/settingsRouter');
const symbolsRouter = require('./routers/symbolsRouter');
const exchangeRouter = require('./routers/exchangeRouter');

app.post('/login', authController.doLogin);
app.use('/settings', authMiddleware, settingsRouter);

app.use('/symbols', authMiddleware, symbolsRouter);
app.use('/exchange', authMiddleware, exchangeRouter);

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
