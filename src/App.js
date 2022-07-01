import {Provider} from 'react-redux';
import {Route, Routes, Navigate} from "react-router-dom";
import {store} from "./redux/store";
import {Header, Home, CoinDetail} from "./pages";
import {PATHS} from "./configs/routes.config";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Routes>
                <Route path={PATHS.COIN_DETAIL} element={<CoinDetail/>}/>
                <Route path={PATHS.HOME} element={<Home/>} exact/>
                <Route path={'*'} element={<Navigate to={PATHS.HOME} replace/>}/>
            </Routes>
        </Provider>);
}

export default App;
