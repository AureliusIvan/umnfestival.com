import { lazy, Suspense } from "react";
import "./Admin.scss"
import { Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "../../Route/Components/ProtectedRoute";
const NavbarAdmin = lazy(() => import("./../../Reusable/NavbarAdmin/NavbarAdmin"));
const Feature = lazy(() => import("./Feature/Feature"));
const Division = lazy(() => import("./Division/Division"));
const Database = lazy(() => import("./Database/Database"));


export default function Admin() {
    return (
        <div id="Admin">
            <Routes>
                <Route path="/" element={
                    <>
                        <ProtectedRoute user="admin">
                            <NavbarAdmin />
                            <Outlet />
                        </ProtectedRoute>
                    </>}>
                    <Route path="database" element={<Suspense fallback="Loading..."><Database /></Suspense>} />
                    <Route path="division" element={<Suspense fallback="Loading..."><Division /></Suspense>} />
                    <Route path="feature" element={<Suspense fallback="Loading..."><Feature /></Suspense>} />

                </Route>
            </Routes>
        </div>
    )
}