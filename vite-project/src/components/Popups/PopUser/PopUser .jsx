import *as S from "./PopUser.styled"
function PopUser({isOpen}) {
  return (
    <div
      style={isOpen ? { display: "block" } : { display: "none" }}
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
    >
      {/* <a href="">x</a> */}
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <S.ThemeToggle>
      
        <p>Темная тема</p>
        <input type="checkbox"  name="checkbox" />
     
      </S.ThemeToggle>
      <S.UserButton >
        <a href="#popExit">Выйти</a>
      </S.UserButton>
    </div>
  );
}
export default PopUser;
