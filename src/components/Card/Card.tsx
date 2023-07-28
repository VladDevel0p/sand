import React, {useEffect} from 'react';
import './Card.scss';
import {Button} from "@mui/material";
//@ts-ignore
import sand from "./sand.png"
import {IGoodCard} from "../../utils/consts";
export function Card(props: IGoodCard) {

    return <section
        className={'card'}
    >
        <h3 className={'title'}>{props.title}</h3>
        <img className={'cardImage'} alt={"песок 1 класс"} src={props.image}></img>
        <Button className={'buyButton'}>
            Заказать
        </Button>
    </section>
}