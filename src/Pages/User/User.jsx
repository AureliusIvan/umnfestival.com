import "./User.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy, useCallback } from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import ProtectedRoute from "../../Route/ProtectedRoute";
import EnterAnimation from "../../Reusable/Animation/EnterAnimation/EnterAnimation";

import ProtectedRoutePathVerify from "../../Route/ProtectedRouteVerify";
const Announcement = lazy(() => import("./Announcement/Announcement"));
const ComingSoon = lazy(() => import("./ComingSoon/ComingSoon"));
const NavbarUser = lazy(() => import("../../Reusable/NavbarUser/Navbar"));
const NavbarMobile = lazy(() => import("../../Reusable/NavbarUser/NavbarMobile/NavbarMobile"));
const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About Us/About"));
const Division = lazy(() => import("./Division/Division"));
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const Join = lazy(() => import("./Join/Join"));


export default function User() {
    // Check if screen is mobile
    const isMobile = useMediaQuery("(max-width: 960px)")
    // Callback
    const HomeCallback = useCallback(() => {
        return <Home />
    }, [])

    const AboutCallback = useCallback(() => {
        return <About />
    }, [])

    const DivisionCallback = useCallback(() => {
        return <Division />
    }, [])



    return (
        <div id="User-Page">
            <Routes>
                <Route path="/" element={<>
                    {isMobile ? <Suspense fallback={
                        <LoadingScreen />}>
                        <NavbarMobile />
                    </Suspense>
                        : <Suspense fallback={<LoadingScreen />}>
                            <EnterAnimation className="NavbarUser-wrap">
                                <NavbarUser />
                            </EnterAnimation>
                        </Suspense>}
                    <Outlet />
                    <Footer />
                </>}>
                    <Route path="/" element={<Suspense fallback={<LoadingScreen />}><HomeCallback /></Suspense>} />
                    {/* <Route path="home" element={<Suspense fallback={<LoadingScreen />}>
                        <HomeCallback />
                    </Suspense>} /> */}
                    <Route path="Announcement" element={<Suspense fallback={<LoadingScreen />}>
                        <Announcement />
                    </Suspense>} />
                    <Route path="about" element={<Suspense fallback={<LoadingScreen />}><AboutCallback /></Suspense>} />
                    <Route path="division" element={<Suspense fallback={<LoadingScreen />}><DivisionCallback /></Suspense>} />
                    <Route path="login" element={
                        <ProtectedRoute user={"guest"}>
                            <Suspense fallback={<LoadingScreen />}>
                                <Login />
                                {/* <ComingSoon /> */}
                            </Suspense>
                        </ProtectedRoute>
                    } />
                    <Route path="register" element={
                        <ProtectedRoute user={"guest"}>
                            <Suspense fallback={<LoadingScreen />}>
                                <Register />
                            </Suspense>
                        </ProtectedRoute>
                    } />
                    <Route path="register/verify" element={
                        <ProtectedRoute user={"user"}>
                            {/* <ProtectedRoutePath path="/register/verify"> */}
                            <VerifyEmail />
                            {/* </ProtectedRoutePath> */}
                        </ProtectedRoute>
                    } />
                    <Route path="verify" element={
                        <ProtectedRoute user={"user"}>
                            {/* <ProtectedRoutePath path="/register/verify"> */}
                            <VerifyEmail />
                            {/* </ProtectedRoutePath> */}
                        </ProtectedRoute>
                    }
                    />
                    <Route path="recruitment" element={<>
                        <ProtectedRoute user={"user"}>
                            <ProtectedRoutePathVerify>
                                <Suspense fallback={<LoadingScreen />}>
                                    <Join />
                                </Suspense>
                            </ProtectedRoutePathVerify>
                        </ProtectedRoute>
                    </>
                    } />
                    <Route path="/comingsoon" element={<ComingSoon />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </div>
    )
}