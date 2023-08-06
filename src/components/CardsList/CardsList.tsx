import React, {useEffect, useLayoutEffect} from 'react';
import './CardsList.scss';
import {Card} from "../Card/Card";
import {IGoodCard} from "../../utils/consts";
import {CardConnected} from "../Card/CardConnected";

export interface ICardListProps {
    idTitle: string;
    itemList: IGoodCard[];
    listTitle: string;
}

export enum Sections_Id {
    Sand_ID = 'песок',
    PGS_ID = 'пгс',
    GRAVII_ID = 'щебень',
}
export function CardsList(props: ICardListProps) {

    return <div id={props.idTitle} className={'listContainer'}>
        <section className={'titleList'}>
            <span className={'text'}>
                {props.listTitle}
            </span>
        </section>
        <section className={'itemsList'}>
            {props.itemList.map((elem) => {
                return <CardConnected title={elem.title} image={elem.image} description={elem.description}/>
            })}
        </section>
    </div>
}