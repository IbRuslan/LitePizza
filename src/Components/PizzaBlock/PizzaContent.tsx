import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addProduct} from "../../store/cart-reducer";
import {Pizzas} from "../../api/api";

type PizzaContentTypeProps = {
    pizza: Pizzas
}

export const PizzaContent: React.FC<PizzaContentTypeProps> = ({pizza, ...props}) => {

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedType, setSelectedType] = useState(0)
    const typeNames = ['тонкое', 'традиционное']

    const itemCount = useAppSelector(state => state.cart.items.find(p => p.id === pizza.id))
    const count = itemCount ? itemCount.count : 0
    const dispatch = useAppDispatch()

    const onClickAddProduct = (item: Pizzas) => {
        dispatch(addProduct(item))
    }


    return (
        <div className='pizza-block-wrapper'>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={pizza.imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{pizza.title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            pizza.types.map((t, i) =>
                                <li key={i} onClick={()=>setSelectedType(i)} className={selectedType === i ? 'active': ''}>{typeNames[t]}</li>)
                        }
                    </ul>
                    <ul>
                        {
                            pizza.sizes.map((s, i) =>
                                <li key={i} onClick={()=>setSelectedSize(i)} className={selectedSize === i ? 'active': ''}>{s} см.</li>)
                        }
                    </ul>
                </div>
                <div className="pizza-block__bottom" onClick={()=>onClickAddProduct(pizza)}>
                    <div className="pizza-block__price">от {pizza.price} ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {
                            count > 0 && <i>{count}</i>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}