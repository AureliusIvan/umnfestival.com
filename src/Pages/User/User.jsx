import "./User.scss";
// import { useSelector } from 'react-redux';
// import { selectPage } from '../../Redux/features/page/pageSlice';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Suspense, lazy, useCallback, useRef } from "react";
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import { Route, Routes, Navigate } from "react-router-dom";
// import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { Outlet } from "react-router-dom";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import ProtectedRoute from "../../Route/ProtectedRoute";
import ProtectedRoutePath from "../../Route/ProtectedRoutePath";
import { LazyMotion, domAnimation, m } from 'framer-motion';
import EnterAnimation from "../../Reusable/Animation/EnterAnimation/EnterAnimation";
import ComingSoon from "./ComingSoon/ComingSoon";
import ProtectedRoutePathVerify from "../../Route/ProtectedRouteVerify";

const NavbarUser = lazy(() => import("../../Reusable/NavbarUser/Navbar"));
const NavbarMobile = lazy(() => import("../../Reusable/NavbarUser/NavbarMobile/NavbarMobile"));
const Footer = lazy(() => import("../../Reusable/Footer/Footer"));
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About Us/About"));
const Division = lazy(() => import("./Division/Division"));
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const Join = lazy(() => import("./Join/Join"));


export default function User(props) {
    const isMobile = useMediaQuery("(max-width: 960px)")
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
        <LazyMotion features={domAnimation}>
            <m.div id="User-Page"
            // initial={{
            //     overflow: "hidden"
            // }}
            // animate={{
            //     overflow: "visible",
            //     transition: {
            //         delay: 3,
            //         duration: 0.5
            //     }
            // }}

            >
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
                        <Route path="home" element={<Suspense fallback={<LoadingScreen />}><HomeCallback /></Suspense>} />
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
            </m.div>
        </LazyMotion>
    )
}