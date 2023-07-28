import React, {useEffect, useLayoutEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import {NavigationBar} from "../NavigationBar/NavigationBar";

import "./PageWrapper.scss";
import {useWindowDimensions} from "../../windowDimensions/windowDimensions";

export function PageWrapper(props) {
    const {width, height} = useWindowDimensions();

    return <main className={'pageWrapper'}>
        <NavigationBar/>
        <div className={'appContainer'}>
            {props.children}
        </div>
    </main>
}