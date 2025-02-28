import React, {useEffect, useLayoutEffect} from 'react';
import "aos/dist/aos.css";

import {NavigationBar} from "../NavigationBar/NavigationBar";

import "./PageWrapper.scss";


export function PageWrapper(props) {
    return <main className={'pageWrapper'}>
        {/*<NavigationBar/>*/}
        <div className={'appContainer'}>
            {props.children}
        </div>
    </main>
}
