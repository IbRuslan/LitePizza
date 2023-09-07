import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Search.module.scss'
import searchIcon from './search_icon.svg'
import deleteIcon from './delete_icon.svg'
import {GetSelectedPizzasTC} from "../../store/pizzas-reducer";
import {useAppDispatch} from "../../store/store";

export const Search = () => {

    const [value, setValue] = useState('')

    const dispatch = useAppDispatch()


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