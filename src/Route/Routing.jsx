import { Route, Routes, Navigate } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute"
import { lazy } from "react"
import { Suspense } from "react";
import LoadingScreen from "../Reusable/LoadingScreen/LoadingScreen";
import Logo from "../Reusable/ComponentItems/Logo/Logo";
const User = lazy(() => import("../Pages/User/User"));
const Admin = lazy(() => import("../Pages/Admin/Admin"));

//Nambah Component yang lagi dibuat
//import Logo from "../Reusable/ComponentItems/Logo";

export default function Routing() {
    return (
        <Routes>
                <Route path="/*" element={<Logo />} />
        </Routes>


        /*
        <Routes>
            <Route path="/*" element={
                <Suspense fallback={<LoadingScreen />}>
                    <User />
                </Suspense>} />
            <Route path="/admin/*" element={<>
                <ProtectedRoute user="admin">
                    <Suspense fallback={<LoadingScreen />}>
                        <Admin />
                    </Suspense>
                </ProtectedRoute>
            </>
            } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>*/
    )
}