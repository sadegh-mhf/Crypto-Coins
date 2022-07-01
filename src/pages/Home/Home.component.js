import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoadingSpinner} from "components";
import {fetchMarketsCoins} from "redux/actions/MarketsCoins.action";
import styles from './Home.module.scss';

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coinsData = useSelector(state => state.coinsState);
    const tableTitles = ["Asset", " Last Price", "Today's change", "Highest Price of day", "Lowest Price of day", "Trade"];

    useEffect(() => {
        dispatch(fetchMarketsCoins());
    }, [])

    const showCoinDetails = (coinId) => {
        navigate(`/coins/${coinId}`);
    }

    return (
        <>
            {(coinsData?.processing) && <LoadingSpinner/>}
            <div className={styles.main}>
                <div className={styles.container}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            {
                                tableTitles.map((title, index) => <td key={index}>{title}</td>)
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {coinsData.coins?.map(coin => (
                            <tr key={coin.id} onClick={() => showCoinDetails(coin.id)}>
                                <td>
                                    <div className={styles.asset}>
                                        <img
                                            className={styles.asset_coinImg}
                                            src={coin.image}
                                            alt={coin.id}
                                            loading="lazy"
                                        />
                                        <span>
                                            <b>{coin.symbol.toUpperCase()}&nbsp;</b>
                                        </span>
                                        <span className={styles.grayTxt}>{coin.name}</span>
                                    </div>
                                </td>
                                <td><b>$ {coin.current_price.toLocaleString('en-US')}</b></td>
                                <td
                                    className={
                                        Math.sign(coin.price_change_percentage_24h) === 1
                                            ? styles.greenTxt
                                            : styles.redTxt
                                    }
                                >
                                    {coin.price_change_percentage_24h.toFixed(2)} %
                                </td>
                                <td>
                                    $ {coin.high_24h.toLocaleString('en-US')}
                                </td>
                                <td>
                                    $ {coin.low_24h.toLocaleString('en-US')}
                                </td>
                                <td>
                                    <button className={styles.buyBtn} disabled={true}>
                                        Buy
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export {Home};