import React from "react";


type CategoriesType = {
    value: number
    onClickCallback: (i: number) => void
}

export const Categories: React.FC<CategoriesType> = ({value, onClickCallback}) => {

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    const onClickCategoryHandler = (index: number) => {
        onClickCallback(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((c, i) =>
                    <li key={i} onClick={()=> onClickCategoryHandler(i)} className={value === i ? 'active' : ''} >{c}</li>)
                }
            </ul>
        </div>
    )
}