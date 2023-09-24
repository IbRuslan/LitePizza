import React from "react";
import {CategoriesType} from "../store/pizzas-reducer";

type CategoriesPropsType = {
    value: CategoriesType
    onClickCallback: (value: CategoriesType) => void
}

export const Categories: React.FC<CategoriesPropsType> = ({value, onClickCallback}) => {

    const categories: CategoriesType[] = [
        {name: 'Все', category: 0},
        {name: 'Мясные', category: 1},
        {name: 'Вегетарианская', category: 2},
        {name: 'Гриль', category: 3},
        {name: 'Острые', category: 4},
        {name: 'Закрытые', category: 5}
    ]

    const onClickCategoryHandler = (index: CategoriesType) => {
        onClickCallback(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((c, i) =>
                    <li key={i} onClick={()=> onClickCategoryHandler(c)} className={value.name === c.name ? 'active' : ''} >{c.name}</li>)
                }
            </ul>
        </div>
    )
}