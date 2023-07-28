//@ts-ignore
import pgs from "./pgs.jpeg";
//@ts-ignore
import gravii from "./gravii.jpg";
//@ts-ignore
import sand from "./sand.png";

export interface IGoodCard {
    title: string;
    image: any;
    description: string;
}

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
