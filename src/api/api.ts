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

// export type GetPizzasType = {
//     pizza: Pizzas[]
// }


export const PizzaApi = {
    getPizzasCategory(category: number, sort: string) {
        if (category !== 0) {
            return instance.get<Pizzas[]>(`/items?category=${category}&sortBy=${sort}`)
        }
        return instance.get<Pizzas[]>(`/items?sortBy=${sort}`)
    },
    getSearchPizzas(category: number, sort: string, title: string) {
        if (category !== 0) {
            return instance.get<Pizzas[]>(`/items?title=${title}&category=${category}&sortBy=${sort}`)
        }
        return instance.get<Pizzas[]>(`/items?sortBy=${sort}&title=${title}`)
    }
}