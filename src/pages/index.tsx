import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {CardsList, Sections_Id} from "../components/CardsList/CardsList";
import {GRAVII, PGS, SAND} from "../utils/consts";
import {store} from "../store/store";
import {Provider} from "react-redux";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Provider
            store={store}
        >
            <PageWrapper>
                <CardsList idTitle={Sections_Id.Sand_ID} listTitle={'Песок'} itemList={SAND}/>
                <CardsList idTitle={Sections_Id.PGS_ID} listTitle={'ПГС'} itemList={PGS}/>
                <CardsList idTitle={Sections_Id.GRAVII_ID} listTitle={'Щебень'} itemList={GRAVII}/>
            </PageWrapper>
        </Provider>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Песочек</title>
