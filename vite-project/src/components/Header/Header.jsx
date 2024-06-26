import PopUser from "../Popups/PopUser/PopUser ";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
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
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a onClick={openMenu} className="header__user _hover02">
              Ivan Ivanov
            </a>
            <PopUser isOpen={isOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
