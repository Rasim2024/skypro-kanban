import styled from 'styled-components';
import { hover01 } from '../Common/Common.styled';

export const HeaderButton = styled.button`
  /* Базовые стили */
  width: 178px;
  height: 30px;
  border-radius: 4px;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  background-color: #565EEF;

  /* Применение hover01 */
  ${hover01}
`;

export const Header = styled.header`

  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;

`
export const HeaderBlock = styled.div`

  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;

`;
export const HeaderNav = styled.nav`

  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const HeaderUser = styled.a`

  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;

`

