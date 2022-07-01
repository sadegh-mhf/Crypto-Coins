import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import moment from "moment";
import {fetchCoinChart} from "redux/actions/CoinChart.action";
import styles from './LineChart.module.scss';

Chart.register(CategoryScale);

const LineChart = ({coinId, days, type}) => {

    const dispatch = useDispatch();
    const coinChartData = useSelector(state => state.coinChartState);

    useEffect(() => {
        dispatch(fetchCoinChart(coinId, days));
    }, [coinId, days])

    let chartsParams = {
        labels: coinChartData?.chartInfo[0]?.prices.map(item => {
            let time = moment(item[0]).format("HH:MM");
            let date = moment(item[0]).format("YYYY/MM/DD - HH:MM");
            return +days === 1 ? time : date
        }),
        datasets: [{
            data: coinChartData?.chartInfo[0]?.prices.map(item => item[1]),
            backgroundColor: "rgb(255,95,0)",
            borderColor: "rgb(255,95,0)",
            label: coinId
        }]
    }

    return (
        <div className={styles.main}>
            <Line data={chartsParams} type={type}/>
        </div>
    );
};

export {LineChart};