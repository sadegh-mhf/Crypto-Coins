import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import {LineChart, LoadingSpinner} from "components";
import {fetchCoinDetails} from "redux/actions/CoinDetails.action";
import {fetchCoinChart} from "redux/actions/CoinChart.action";
import styles from './CoinDetail.module.scss';

Chart.register(CategoryScale);

const CoinDetail = () => {

    const {coinId} = useParams();
    const dispatch = useDispatch();
    const coinDetailsData = useSelector(state => state.coinDetailsState);
    const coinChartData = useSelector(state => state.coinChartState);
    const [days, setDays] = useState(2);

    const selectOptions = [
        {
            name: "1 day ago",
            value: 1
        },
        {
            name: "2 days ago",
            value: 2
        },
        {
            name: "1 week ago",
            value: 7
        },
        {
            name: "1 month ago",
            value: 30
        }
    ]

    useEffect(() => {
        dispatch(fetchCoinDetails(coinId));
    }, [coinId])

    useEffect(() => {
        dispatch(fetchCoinChart(coinId, days));
    }, [days])

    const handleChangeDays = (event) => {
        setDays(+event.target.value);
    }

    return (
        <>
            {(coinDetailsData?.processing || coinChartData?.processing) && <LoadingSpinner/>}
            <section className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.contents}>
                        <div className={styles.lefSide}>
                            <img src={coinDetailsData?.coinInfo[0]?.image.large} alt=""/>
                            <h1>{coinDetailsData?.coinInfo[0]?.name}</h1>
                            <p>
                                <span> <b>Price:</b> </span>
                                <span>
                                {coinDetailsData?.coinInfo[0]?.market_data.current_price.usd.toLocaleString('en-US')} USD
                            </span>
                            </p>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.chart}>
                                {
                                    coinChartData?.chartInfo[0]?.prices &&
                                    <LineChart coinId={coinId} days={days} type={"line"}/>
                                }
                                <label className={styles.chart_settings} htmlFor="chart-settings">Show data for:
                                    <select name="" id="chart-settings" value={days} onChange={handleChangeDays}>
                                        {
                                            selectOptions.map(option => <option
                                                value={option.value}>{option.name}</option>)
                                        }
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export {CoinDetail};