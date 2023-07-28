import React from 'react';
import AppBar from '@mui/material/AppBar';

import './NavigationBar.scss';

//@ts-ignore
import telegram from "./telegram.svg";
//@ts-ignore
import viber from "./viber.svg";
//@ts-ignore
import whatsapp from "./whatsapp.svg";
import {Button} from "@mui/material";
import {Sections_Id} from "../CardsList/CardsList";

export interface ILink {
    name: string;
    id: Sections_Id
}

const LINKS: ILink[] = [
    {
        name: 'Песок',
        id: Sections_Id.Sand_ID,
    }, {
        name: 'ПГС',
        id: Sections_Id.PGS_ID,
    }, {
        name: 'Щебень',
        id: Sections_Id.GRAVII_ID,
    },
];
const MESSENGER_ICONS: IMessengerIcon[] = [
    {
        href: 'https://t.me/vladvolchek',
        icon: telegram,
    },
    {
        href: 'viber://chat?number=%2B375292316453',
        icon: viber,
    },
    {
        href: 'https://api.whatsapp.com/send/?phone=375299348970',
        icon: whatsapp,
    },
];

interface IMessengerIcon {
    href: string;
    icon: any;
}

export function NavigationBar() {
    return <div className={'navigationBarContainer'}>
        <div className={'navigationBarLeftPart'}>
            {LINKS.map((elem, index) => (
                <a
                    href={`#${elem.id}`}
                    className={'linkElement'}
                    key={`${index}/${new Date().getTime()}`}
                >
                    <Button className={'button'} >{elem.name}</Button>
                </a>
            ))}
        </div>
        <div className={'navigationBarRightPart'}>
            {MESSENGER_ICONS.map((elem, index) => (<a
                target={'_blank'}
                href={elem.href}
            >
                <img className={'messengerIcon'} src={elem.icon}/>
            </a>))}
            <a
                href={'tel:375292316453'}
                className={'phoneLink'}
            >
                +375 29 XXX XX XX
            </a>
        </div>
    </div>

}