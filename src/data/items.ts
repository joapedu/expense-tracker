import { Item } from "../types/Item";

export const items: Item[] = [
    /** outubro */
    { date: new Date(2023, 9, 5), category: 'salary', title: 'Salário', value: 3600 },
    { date: new Date(2023, 9, 15), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2023, 9, 15), category: 'food', title: 'Burguer King', value: 28 },
    { date: new Date(2023, 9, 16), category: 'rent', title: 'Aluguel', value: 2300 },
    { date: new Date(2023, 9, 22), category: 'others', title: 'Uber', value: 9.15 },

    /** novembro */
    { date: new Date(2023, 10, 1), category: 'salary', title: 'Vale Transporte', value: 250 },
    { date: new Date(2023, 10, 5), category: 'salary', title: 'Salário', value: 3600 },
    { date: new Date(2023, 10, 3), category: 'others', title: 'Uber', value: 14 },
    { date: new Date(2023, 10, 11), category: 'others', title: 'Curso Udemy', value: 799 },
    { date: new Date(2023, 10, 16), category: 'rent', title: 'Aluguel', value: 2300 },

];