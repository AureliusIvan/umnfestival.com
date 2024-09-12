import "./User.scss";

import {lazy, Suspense} from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";

const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const Division = lazy(() => import("./Division/Division"));

export default function User() {

  return (<div>
    <Routes>
      <Route
          path="/"
          element={<section>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </section>}
      >
        <Route
            path="/"
            element={<Home/>}
        />

        <Route
            path="division"
            element={<Suspense fallback={<LoadingScreen/>}>
              <Division/>
            </Suspense>}
        />

        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  </div>);
}
