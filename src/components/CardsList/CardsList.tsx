import React, {useEffect, useLayoutEffect} from 'react';
import './CardsList.scss';
import {Card} from "../Card/Card";
import {IGoodCard} from "../../utils/consts";

export interface ICardListProps {
    idTitle: string;
    itemList: IGoodCard[];
    listTitle: string;
}

export enum Sections_Id {
    Sand_ID = 'sand_id',
    PGS_ID = 'PGS_id',
    GRAVII_ID = 'gravii_id',
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
                return <Card title={elem.title} image={elem.image} description={elem.description}/>
            })}
        </section>
    </div>
}