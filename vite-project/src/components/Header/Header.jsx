import PopUser from "../Popups/PopUser/PopUser ";
import React, { useState } from "react";
import * as S from "./Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <S.Header>
      <div className="container">
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/images/LogoDark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderButton>
            < S.HeaderUser onClick={openMenu} className="_hover02">
              Ivan Ivanov
            </S.HeaderUser>
            <PopUser isOpen={isOpen} />
          </S.HeaderNav>
        </S.HeaderBlock>
      </div>
    </S.Header>
  );
};

export default Header;
