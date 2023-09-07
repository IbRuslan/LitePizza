import axios from "axios";


const instance = axios.create({
    baseURL: 'https://64f97c1a4098a7f2fc147ac4.mockapi.io/api/',
})

export type Pizzas = {
	id: number;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}

export type GetPizzasType = {
    pizza: Pizzas[]
}


export const PizzaApi = {
    getPizzas(sort: string) {
        return instance.get<GetPizzasType>(`/items?sortBy=${sort}`)
    },
	getPizzasCategory(category: number, sort: string) {
		return instance.get<GetPizzasType>(`/items?category=${category}&sortBy=${sort}`)
	}
}