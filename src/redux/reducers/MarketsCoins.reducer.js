import {MARKETS_COINS_FAIL, MARKETS_COINS_REQ, MARKETS_COINS_SUC} from "configs/variables.config";

const initialState = {
    processing: false,
    coins: [],
    error: ''
}

const marketsCoinReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKETS_COINS_REQ:
            return {
                ...state,
                processing: true
            }
        case MARKETS_COINS_SUC:
            return {
                processing: false,
                coins: action.payload,
            }
        case MARKETS_COINS_FAIL:
            return {
                processing: false,
                coins: [],
                error: action.payload
            }
        default:
            return state
    }
}

export {marketsCoinReducer}