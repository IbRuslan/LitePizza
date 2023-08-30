import React, {useState} from "react";

export const Categories = () => {

    const [active, setActive] = useState(0)

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    const onClickCategoryHandler = (index: number) => {
        setActive(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((c, i) =>
                    <li key={i} onClick={()=> onClickCategoryHandler(i)} className={active === i ? 'active' : ''} >{c}</li>)
                }
            </ul>
        </div>
    )
}