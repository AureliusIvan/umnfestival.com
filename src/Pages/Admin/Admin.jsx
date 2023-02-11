import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import "./Admin.scss"
import LoadingScreen from "../../Reusable/LoadingScreen/LoadingScreen";
import { Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "../../Route/ProtectedRoute";
const NavbarAdmin = lazy(() => import("./../../Reusable/NavbarAdmin/NavbarAdmin"));
const Feature = lazy(() => import("./Feature/Feature"));
const Division = lazy(() => import("./Division/Division"));
const Database = lazy(() => import("./Database/Database"));

export default function Admin() {
    const page = useSelector(selectPage);
    return <div id="Admin">
        <Suspense fallback={<LoadingScreen />}>
        </Suspense>
        <Routes>
            <Route path="/" element={<>
                <ProtectedRoute user="admin">
                    <NavbarAdmin />
                    <Outlet />
                </ProtectedRoute>
            </>
            }>
                <Route path="database" element={<Suspense fallback="Loading..."><Database /></Suspense>} />
                <Route path="division" element={<Suspense fallback="Loading..."><Division /></Suspense>} />
                <Route path="feature" element={<Suspense fallback="Loading..."><Feature /></Suspense>} />

            </Route>
        </Routes>
    </div>
}