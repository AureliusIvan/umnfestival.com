import "./User.scss";

import {Suspense, lazy, useCallback} from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import {Route, Routes, Navigate, Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";

const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const Division = lazy(() => import("./Division/Division"));

export default function User() {
  const DivisionCallback = useCallback(() => {
    return <Division/>
  }, [])

  return (
      <div>
        <Routes>
          <Route
              path="/"
              element={
                <section>
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
                </section>
              }
          >
            <Route
                path="/"
                element={
                  <Home/>
                }
            />

            <Route
                path="division"
                element={
                  <Suspense fallback={<LoadingScreen/>}>
                    <DivisionCallback/>
                  </Suspense>
                }
            />

            <Route path="*" element={<Navigate to="/"/>}/>
          </Route>
        </Routes>
      </div>
  );
}
