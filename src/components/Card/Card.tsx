import React, {useEffect} from 'react';
import './Card.scss';
import {Button} from "@mui/material";
//@ts-ignore
import sand from "./sand.png"
import {IGoodCard} from "../../utils/consts";

export interface ICardStateProps{

}

export interface ICardDispatchProps {

}

export type CardProps = ICardStateProps & ICardDispatchProps & IGoodCard;
export function Card(props: CardProps) {

    return <section
        draggable={false}
        className={'card'}
    >
        <span draggable={false} className={'title'}>{props.title}</span>
        <img draggable={false} className={'cardImage'} alt={"песок 1 класс"} src={props.image}></img>
        <span draggable={false} className={'description'}><strong>Цена:</strong> n р. за <i>м<sup><small>3</small></sup></i></span>
        <Button draggable={false} className={'buyButton'}>
            Заказать
        </Button>
    </section>
}