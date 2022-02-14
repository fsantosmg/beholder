const symbolsRepository = require('../repositories/symbolsRepository');

async function updateSymbol(req, res, next) {
    const newSymbol = req.body;
    const symbol = req.params.symbol;
    await symbolsRepository.updateSymbol(symbol, newSymbol);
    res.sendStatus(200);
}

async function getSymbols(req, res, next) {
    const symbols = await symbolsRepository.getSymbols();
    res.json(symbols);
}

async function getSymbol(req, res, next) {
    const symbol = await symbolsRepository.getSymbol(req.params.symbol);
    res.json(symbol);
}

async function syncSymbols(req, res, next) {

    const favoriteSymbols = (await symbolsRepository.getSymbols()).filter(s => s.isFavorite).map(s => s.symbol);

    const settingsRepository = require('../repositories/settingsRepository');
    const settings = await settingsRepository.getSetingsDecrypted(res.locals.token.id);


    const exchange = require('../utils/exchange')(settings);
    const symbols = (await exchange.exchangeInfo()).symbols.map(item => {
        const minNotionalFilter = item.filters.find(filter => filter.filterType === 'MIN_NOTIONAL');
        const minLotSizeFilter = item.filters.find(filter => filter.filterType === 'LOT_SIZE');

        return {
            symbol: item.symbol,
            basePrecision: item.baseAssetPrecision,
            quotePrecision: item.quoteAssetPrecision,
            base: item.baseAsset,
            quote: item.quoteAsset,
            minNotional: minNotionalFilter ? minNotionalFilter.minNotional : '1',
            minLotSize: minLotSizeFilter ? minLotSizeFilter.minQty : '1',
            isFavorite: favoriteSymbols.some(s => s === item.symbol)
        }
    });

    await symbolsRepository.deleteAll();
    await symbolsRepository.bulkInsert(symbols);
    res.sendStatus(201);
}

module.exports = {getSymbols, updateSymbol, getSymbol, syncSymbols};