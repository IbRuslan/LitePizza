import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Search.module.scss'
import searchIcon from './search_icon.svg'
import deleteIcon from './delete_icon.svg'
import {GetPizzasCategoryTC, GetSelectedPizzasTC} from "../../store/pizzas-reducer";
import {useAppDispatch, useAppSelector} from "../../store/store";

export const Search = () => {

    const [value, setValue] = useState('')

    const category = useAppSelector(state => state.pizzas.mainCategory)
    const sortType = useAppSelector(state => state.pizzas.mainSort)

    const dispatch = useAppDispatch()

    useEffect(()=> {
        if(value.trim() !== '') {
            dispatch(GetSelectedPizzasTC(category.category, sortType.sort, value))
        } else {
           dispatch(GetPizzasCategoryTC(category, sortType))
        }
    }, [value])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.root}>
            <input value={value} onChange={onChangeHandler} className={s.input} placeholder={'Поиск пиццы...'}/>
            <img src={searchIcon} alt={"search"} className={s.icon}/>
            {
                value && (<img src={deleteIcon} alt={"delete"} onClick={()=> setValue('')} className={s.iconDelete}/>)
            }
        </div>

    );
};