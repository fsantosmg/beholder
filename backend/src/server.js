const database = require('./db');
const app = require('./app');
const appWs = require('./app-ws');
const settingsRepository = require('./repositories/settingsRepository');
const appEm = require('./app-em');

settingsRepository.getDefaultSettings()
    .then(settings => {
        const server = app.listen(process.env.PORT, () => {
            console.log('App is running in ' + process.env.PORT);
        })

        const wss = appWs(server);
        appEm(settings, wss);

    }).catch(err => {
    console.log(err);
})


