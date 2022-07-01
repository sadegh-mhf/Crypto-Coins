import {combineReducers} from 'redux';
import {marketsCoinReducer} from "./reducers/MarketsCoins.reducer";
import {CoinDetailsReducer} from "./reducers/CoinDetails.reducer";
import {CoinChartReducer} from "./reducers/CoinChart.reducer";

const rootReducer = combineReducers({
    coinsState: marketsCoinReducer,
    coinDetailsState: CoinDetailsReducer,
    coinChartState: CoinChartReducer
})

export {rootReducer}