import { Route, Routes, Navigate } from "react-router-dom"
import { lazy } from "react"
const User = lazy(() => import("../Pages/User/User"));

export default function Routing() {
    return (
        <Routes>
            <Route path="/*" element={<User />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}