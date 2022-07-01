import {
    COIN_CHART_FAIL,
    COIN_CHART_REQ, COIN_CHART_SUC,
} from "configs/variables.config";

const initialState = {
    processing: false,
    chartInfo: [],
    error: ''
}

const CoinChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case COIN_CHART_REQ:
            return {
                ...state,
                processing: true
            }
        case COIN_CHART_SUC:
            return {
                processing: false,
                chartInfo: [action.payload],
            }
        case COIN_CHART_FAIL:
            return {
                processing: false,
                chartInfo: [],
                error: action.payload
            }
        default:
            return state
    }
}

export {CoinChartReducer}