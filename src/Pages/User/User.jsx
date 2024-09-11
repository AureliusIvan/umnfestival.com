import "./User.scss";

import {Suspense, lazy, useCallback} from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import {Route, Routes, Navigate, Outlet} from "react-router-dom";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import ProtectedRoute from "../../Route/Components/ProtectedRoute";
import ProtectedRoutePathVerify from "../../Route/Components/ProtectedRouteVerify";
import ProtectedRouteClosed from "../../Route/Components/ProtectedRouteClosed";
import JoinClosed from "./Join/JoinClosed";
import Preulympic from "./Preulympic/Preulympic";
import Navbar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";

const Announcement = lazy(() => import("./Announcement/Announcement"));
const ComingSoon = lazy(() => import("./ComingSoon/ComingSoon"));
const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const About = lazy(() => import("./About Us/About"));
const Division = lazy(() => import("./Division/Division"));
const Register = lazy(() => import("./Register/Register"));
const Join = lazy(() => import("./Join/Join"));

export default function User() {
  const AboutCallback = useCallback(() => {
    return <About/>
  }, [])

  const DivisionCallback = useCallback(() => {
    return <Division/>
  }, [])

  return (
      <div id="User-Page">
        <Routes>
          <Route
              path="/"
              element={
                <>
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
                </>
              }
          >
            <Route
                path="/"
                element={
                  <Home/>
                }
            />
            <Route path="/preulympic" element={<Preulympic/>}/>
            <Route
                path="Announcement"
                element={
                  <Suspense fallback={<LoadingScreen/>}>
                    <Announcement/>
                  </Suspense>
                }
            />
            <Route
                path="about"
                element={
                  <Suspense fallback={<LoadingScreen/>}>
                    <AboutCallback/>
                  </Suspense>
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

            <Route
                path="register"
                element={
                  <ProtectedRoute user={"guest"}>
                    <Suspense fallback={<LoadingScreen/>}>
                      <Register/>
                    </Suspense>
                  </ProtectedRoute>
                }
            />

            <Route
                path="register/verify"
                element={
                  <ProtectedRoute user={"user"}>
                    <VerifyEmail/>
                  </ProtectedRoute>
                }
            />

            <Route
                path="verify"
                element={
                  <ProtectedRoute user={"user"}>
                    <VerifyEmail/>
                  </ProtectedRoute>
                }
            />

            <Route
                path="recruitment"
                element={
                  <>
                    <ProtectedRoute user={"user"}>
                      <ProtectedRoutePathVerify>
                        <ProtectedRouteClosed status={0}>
                          <Suspense fallback={<LoadingScreen/>}>
                            <Join/>
                          </Suspense>
                        </ProtectedRouteClosed>
                      </ProtectedRoutePathVerify>
                    </ProtectedRoute>
                  </>
                }
            />
            <Route path="/comingsoon" element={<ComingSoon/>}/>
            <Route path="/joinclosed" element={<JoinClosed/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Route>
        </Routes>
      </div>
  );
}
