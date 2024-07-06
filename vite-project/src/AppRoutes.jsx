import "./App.css";

import { useState } from "react";

import { GlobalStyle } from "./Global.styled.js";
import { Route, Routes } from "react-router-dom";
import { routesPages } from "./lib/routes.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import ExitPage from "./pages/ExitPage/ExitPage.jsx";
import CardPage from "./pages/CardPage/CardPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Routes>
          <Route element={<PrivateRoute isAuth={isAuth} />}>
            <Route path={routesPages.MAIN} element={<HomePage />} />
            <Route
              path={routesPages.EXIT}
              element={<ExitPage setIsAuth={setIsAuth} />}
            />
            <Route path={routesPages.CARD} element={<CardPage />} />
          </Route>
          <Route path={routesPages.SIGNIN} element={<SignInPage setIsAuth={setIsAuth} />} />
          <Route path={routesPages.REGISTER} element={< RegisterPage />} />
          <Route path={routesPages.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
