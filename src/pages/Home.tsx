import React, {useEffect, useState} from 'react';
import {Categories} from "../Components/Categories";
import {menuSortType, Sort} from "../Components/Sort";
import {PizzaContent} from "../Components/PizzaBlock/PizzaContent";
import {PizzaSkeleton} from "../Components/PizzaBlock/PizzaSkeleton";
import {useAppDispatch, useAppSelector} from "../store/store";
import {GetPizzasCategoryTC, GetPizzasTC} from "../store/pizzas-reducer";

const Home = () => {

    const pizzas = useAppSelector(state => state.pizzas)
    const isLoading = useAppSelector(state => state.app.loading)

    const dispatch = useAppDispatch()

    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState<menuSortType>({name: 'популярности', sort: 'rating'})

    useEffect(()=> {
        if(categoryId !== 0) {
            dispatch(GetPizzasCategoryTC(categoryId, sortType.sort))
        } else {
            dispatch(GetPizzasTC(sortType.sort))
        }
        window.scrollTo(0, 0)
    }, [categoryId, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCallback={(sort: number)=> setCategoryId(sort)}/>
                <Sort value={sortType} onClickCallback={(i: menuSortType)=> setSortType(i)}/>
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