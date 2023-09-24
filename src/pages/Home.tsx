import React, {useEffect} from 'react';
import {Categories} from "../Components/Categories";
import {menuSortType, Sort} from "../Components/Sort";
import {PizzaContent} from "../Components/PizzaBlock/PizzaContent";
import {PizzaSkeleton} from "../Components/PizzaBlock/PizzaSkeleton";
import {useAppDispatch, useAppSelector} from "../store/store";
import {CategoriesType, GetPizzasCategoryTC} from "../store/pizzas-reducer";

const Home = () => {

    const pizzas = useAppSelector(state => state.pizzas.pizzas)
    const isLoading = useAppSelector(state => state.app.loading)

    const dispatch = useAppDispatch()

    const category = useAppSelector(state => state.pizzas.mainCategory)
    const sortType = useAppSelector(state => state.pizzas.mainSort)


    useEffect(()=> {
        dispatch(GetPizzasCategoryTC(category, sortType))
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={category} onClickCallback={(value: CategoriesType)=> dispatch(GetPizzasCategoryTC(value, sortType))}/>
                <Sort value={sortType} onClickCallback={(sort: menuSortType)=> dispatch(GetPizzasCategoryTC(category, sort))}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { !isLoading ?
                    pizzas.map((p)=><PizzaContent key={p.id} pizza={p} /> )
                    : <PizzaSkeleton/>
                }
            </div>
        </div>
    );
};

export default Home;