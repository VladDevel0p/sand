import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {CardsList, Sections_Id} from "../components/CardsList/CardsList";
import {Dishes, GRAVII, PGS, SAND} from "../utils/consts";
import {store} from "../store/store";
import {Provider} from "react-redux";
import {ButtonTest} from "../components/test/button";
import {CardImg, MenuCard, MenuList, PageContainer} from "./styles";
import {useState} from "react";

const IndexPage: React.FC<PageProps> = () => {
    const [items,setItems] = useState<string[]>([]);

    const deleteItem = (item: string) => {
        setItems((prevState) => {
            return prevState.filter(el => el !== item);
        })
    };

    const addItem = (item: string) => {
        setItems((prevState) => {
            return [...prevState, item];
        })
    };


    return (
        <Provider
            store={store}
        >
            <PageWrapper>
                <PageContainer>
                    <MenuList>
                        {Dishes.map(({image, title}) => {
                            const isSelected = items.includes(title);
                            return <MenuCard
                                onClick={() => {
                                    if(isSelected){
                                       deleteItem(title);
                                    } else {
                                        addItem(title)
                                    }
                                }}
                                selected={isSelected}
                            >
                                <CardImg src={image}/>
                                <span>{title}</span>
                            </MenuCard>
                        })}
                    </MenuList>
                    <ButtonTest items={items} disabled={items.length === 0}/>
                </PageContainer>
                {/*<CardsList idTitle={Sections_Id.Sand_ID} listTitle={'Песок'} itemList={SAND}/>*/}
                {/*<CardsList idTitle={Sections_Id.PGS_ID} listTitle={'ПГС'} itemList={PGS}/>*/}
                {/*<CardsList idTitle={Sections_Id.GRAVII_ID} listTitle={'Щебень'} itemList={GRAVII}/>*/}
            </PageWrapper>
        </Provider>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Еда</title>
