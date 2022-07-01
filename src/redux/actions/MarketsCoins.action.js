import {getMarketsCoins} from "api/getData.api";
import {MARKETS_COINS_FAIL, MARKETS_COINS_REQ, MARKETS_COINS_SUC} from "configs/variables.config";

const fetchMarketsCoinsRequest = () => {
    return {
        type: MARKETS_COINS_REQ
    }
}

const fetchMarketsCoinsSuccess = (coins) => {
    return {
        type: MARKETS_COINS_SUC,
        payload: coins
    }
}

const fetchMarketsCoinsFailure = (error) => {
    return {
        type: MARKETS_COINS_FAIL,
        payload: error
    }
}

const fetchMarketsCoins = () => {
    return (dispatch) => {
        dispatch(fetchMarketsCoinsRequest())
        getMarketsCoins()
            .then(response => {
                dispatch(fetchMarketsCoinsSuccess(response));
            })
            .catch(error => {
                dispatch(fetchMarketsCoinsFailure(error.message))
            });
    }
}
export {fetchMarketsCoins}