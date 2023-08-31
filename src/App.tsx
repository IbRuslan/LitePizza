import React, {useEffect} from 'react';
import './scss/app.scss'
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaContent} from "./Components/PizzaBlock/PizzaContent";
import {GetPizzasTC} from "./store/pizzas-reducer";
import {useAppDispatch, useAppSelector} from "./store/store";
import {PizzaSkeleton} from "./Components/PizzaBlock/PizzaSkeleton";


const App = () => {

    const pizzas = useAppSelector(state => state.pizzas)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(GetPizzasTC())
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        { pizzas.length ?
                            pizzas.map((p)=><PizzaContent key={p.id} pizza={p} /> )
                            : <PizzaSkeleton/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;


