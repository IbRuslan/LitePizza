import React, {useEffect} from 'react';
import {Categories} from "../Components/Categories";
import {Sort} from "../Components/Sort";
import {PizzaContent} from "../Components/PizzaBlock/PizzaContent";
import {PizzaSkeleton} from "../Components/PizzaBlock/PizzaSkeleton";
import {useAppDispatch, useAppSelector} from "../store/store";
import {GetPizzasTC} from "../store/pizzas-reducer";

const Home = () => {

    const pizzas = useAppSelector(state => state.pizzas)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(GetPizzasTC())
    }, [])

    return (
        <>
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
        </>
    );
};

export default Home;