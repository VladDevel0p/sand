//@ts-ignore
import pgs from "./pgs.jpeg";
//@ts-ignore
import gravii from "./gravii.jpg";
//@ts-ignore
import sand from "./sand.png";
//@ts-ignore
import chickenRice from "./chiken-rice.jpeg";
//@ts-ignore
import chickenLavalsh from "./chiken-lavash.jpg";
//@ts-ignore
import chocolate from "./chocolate2.jpeg";
//@ts-ignore
import shrimps from "./shrimps.jpg";

export interface IGoodCard {
    title: string;
    image: any;
    description: string;
}

export type CardType =  {
    title: string;
    image: any;
    description: string;
}

export const Dishes: Array<CardType> = [
    {
        title: 'Паста с креветками с сливками',
        description: '',
        image: shrimps,
    },
    {
        title: 'Курица терияки с рисом',
        description: '',
        image: chickenRice,
    },
    {
        title: 'Курица в лаваше',
        description: '',
        image: chickenLavalsh,
    },
    {
        title: 'Шоколадный фондан',
        description: '',
        image: chocolate,
    },
];

export const GRAVII: IGoodCard[] = [
    {
        title: 'Щебень',
        description: '',
        image: gravii,
    }, {
        title: 'Щебень',
        description: '',
        image: gravii,
    }, {
        title: 'Щебень',
        description: '',
        image: gravii,
    }, {
        title: 'Щебень',
        description: '',
        image: gravii,
    }, {
        title: 'Щебень',
        description: '',
        image: gravii,
    }, {
        title: 'Щебень',
        description: '',
        image: gravii,
    },
];
export const PGS: IGoodCard[] = [
    {
        title: 'ПГС',
        description: '',
        image: pgs,
    },{
        title: 'ПГС',
        description: '',
        image: pgs,
    },{
        title: 'ПГС',
        description: '',
        image: pgs,
    }, {
        title: 'ПГС',
        description: '',
        image: pgs,
    },{
        title: 'ПГС',
        description: '',
        image: pgs,
    },{
        title: 'ПГС',
        description: '',
        image: pgs,
    },
];
export const SAND: IGoodCard[] = [
    {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    }, {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    }, {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    }, {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    }, {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    }, {
        description: "",
        image: sand,
        title: 'Песок 1-го класса'
    },
];
