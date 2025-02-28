import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {CardsList, Sections_Id} from "../components/CardsList/CardsList";
import {Dishes, GRAVII, PGS, SAND} from "../utils/consts";
import {store} from "../store/store";
import {Provider} from "react-redux";
import {ButtonTest} from "../components/test/button";
import {useState} from "react";
import {css, styled} from "@mui/material";

export const PageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  gap: 32px;
`;
export const MenuList = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  overflow: auto;
  height: calc(100vh - 200px);
`;

export const MenuCard = styled('div')<{
    selected?: boolean;
}>`
  width: 300px;
  height: 400px;
  border: 2px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ selected, theme }) =>
    selected &&
    css`
            border: 3px solid #94cc3a;
          `}
`;

export const CardImg = styled('img')`
  width: 200px;
  height: 300px;
  object-fit: contain;
`;


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
