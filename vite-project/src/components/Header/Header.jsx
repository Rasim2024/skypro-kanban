import PopUser from "../Popups/PopUser/PopUser ";
import React, { useState } from "react";
import * as S from "./Header.styled";
import * as C from "../Common/Common.styled";
import { Link } from "react-router-dom";
import { routesPages } from "../../lib/routes";


const Header = ({addCard}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  
  return (
    <S.Header>
      <C.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>

          <S.HeaderNav>
            <S.HeaderButton onClick={addCard}>
            <Link to={routesPages.CARD}>Создать новую задачу</Link>
            </S.HeaderButton>
            <S.HeaderUser onClick={openMenu} className="_hover02">
              Ivan Ivanov
            </S.HeaderUser>
            <PopUser isOpen={isOpen} />
          </S.HeaderNav>
        </S.HeaderBlock>
      </C.Container>
    </S.Header>
  );
};

export default Header;
