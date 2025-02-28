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
