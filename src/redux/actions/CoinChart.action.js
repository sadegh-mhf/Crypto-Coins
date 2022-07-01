import {getCoinChart} from "api/getData.api";
import {
    COIN_CHART_FAIL,
    COIN_CHART_REQ, COIN_CHART_SUC
} from "configs/variables.config";

const fetchCoinChartRequest = () => {
    return {
        type: COIN_CHART_REQ
    }
}

const fetchCoinChartSuccess = (chartInfo) => {
    return {
        type: COIN_CHART_SUC,
        payload: chartInfo
    }
}

const fetchCoinChartFailure = (error) => {
    return {
        type: COIN_CHART_FAIL,
        payload: error
    }
}

const fetchCoinChart = (coinId, days) => {
    return (dispatch) => {
        dispatch(fetchCoinChartRequest())
        getCoinChart(coinId, days)
            .then(response => {
                dispatch(fetchCoinChartSuccess(response));
            })
            .catch(error => {
                dispatch(fetchCoinChartFailure(error.message))
            });
    }
}
export {fetchCoinChart}