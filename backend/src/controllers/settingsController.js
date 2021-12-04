function getSettings(req, res, next) {
    res.json({
        email: 'teste@mail.com',
    });
}

module.exports = {getSettings}