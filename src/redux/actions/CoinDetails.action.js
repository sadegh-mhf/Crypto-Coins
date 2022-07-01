import {getCoinDetails} from "api/getData.api";
import {
    COIN_DETAILS_FAIL,
    COIN_DETAILS_REQ,
    COIN_DETAILS_SUC
} from "configs/variables.config";

const fetchCoinDetailsRequest = () => {
    return {
        type: COIN_DETAILS_REQ
    }
}

const fetchCoinDetailsSuccess = (coinInfo) => {
    return {
        type: COIN_DETAILS_SUC,
        payload: coinInfo
    }
}

const fetchCoinDetailsFailure = (error) => {
    return {
        type: COIN_DETAILS_FAIL,
        payload: error
    }
}

const fetchCoinDetails = (coinId) => {
    return (dispatch) => {
        dispatch(fetchCoinDetailsRequest())
        getCoinDetails(coinId)
            .then(response => {
                dispatch(fetchCoinDetailsSuccess(response));
            })
            .catch(error => {
                dispatch(fetchCoinDetailsFailure(error.message))
            });
    }
}
export {fetchCoinDetails}