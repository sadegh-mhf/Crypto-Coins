import {
    COIN_DETAILS_FAIL,
    COIN_DETAILS_REQ, COIN_DETAILS_SUC
} from "configs/variables.config";

const initialState = {
    processing: false,
    coinInfo: [],
    error: ''
}

const CoinDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COIN_DETAILS_REQ:
            return {
                ...state,
                processing: true
            }
        case COIN_DETAILS_SUC:
            return {
                processing: false,
                coinInfo: [action.payload],
            }
        case COIN_DETAILS_FAIL:
            return {
                processing: false,
                coinInfo: [],
                error: action.payload
            }
        default:
            return state
    }
}

export {CoinDetailsReducer}