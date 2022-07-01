import http from 'services/http.service';
import {COINS_INFO, MARKET_CHART, MARKETS_COIN} from "configs/url.config";

export async function getMarketsCoins() {
    try {
        const response = await http.get(MARKETS_COIN);
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function getCoinDetails(coinId) {
    try {
        const response = await http.get(`${COINS_INFO}${coinId}`);
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function getCoinChart(coinId, days) {
    try {
        const response = await http.get(`${COINS_INFO}${coinId}${MARKET_CHART}${days}`);
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
}