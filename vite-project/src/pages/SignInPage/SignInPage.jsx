import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routesPages } from '../../lib/routes';
import * as S from "./SignInPage.styled"

function SignInPage({setIsAuth}) {
    const navigate = useNavigate()

    function handleLogin(event) {
        event.preventDefault();
        // Обработка формы...
        setIsAuth(true)
        navigate(routesPages.MAIN); // Перенаправление на другую страницу
      }

  return (
    <S.LoginWrapper>
    <S.ContainerSignin>
        <S.Modal>
    <S.ModalBlock>
      <S.ModalTitle>
        <h2>Вход</h2>
      </S.ModalTitle>
      <S.ModalFormLogin>
        <S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
        <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
        <S.ModalBtnEnter id="btnEnter" onClick={handleLogin} >Войти</S.ModalBtnEnter>
        <S.ModarFormGroup>
          <p>Нужно зарегистрироваться?</p>
          <Link to={routesPages.REGISTER}>Регистрируйтесь здесь</Link>
        </S.ModarFormGroup>
      </S.ModalFormLogin>
    </S.ModalBlock>
        </S.Modal>
    </S.ContainerSignin>
</S.LoginWrapper>
  )
}

export default SignInPage
