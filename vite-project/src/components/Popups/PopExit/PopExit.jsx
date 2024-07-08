import { Link, useNavigate } from "react-router-dom"
import { routesPages } from "../../../lib/routes"
import * as S from "./PopExit.styled"


function PopExit({setIsAuth}) {
  const navigate = useNavigate()
  const handleLogout = () => {
		setIsAuth(false)
		navigate(routesPages.SIGNIN)
	}
  return (
    <>
      <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes className="_hover01" onClick={handleLogout} id="exitYes">
                Да, выйти
              </S.PopExitYes>
              <S.PopExitNo className="_hover03" id="exitNo">
                <Link to={routesPages.MAIN}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
    </>
  )
}
export default PopExit