import React from 'react';
import './scss/app.scss'
import {Header} from "./Components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                    <Routes>
                        <Route path={'/LitePizza'} element={<Home/>} />
                        <Route path={'/LitePizza/cart'} element={<Cart/>} />
                        <Route path={'/LitePizza/*'} element={<NotFound/>} />
                    </Routes>
            </div>
        </div>
    );
};

export default App;


