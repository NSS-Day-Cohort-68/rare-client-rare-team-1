import { useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Categories } from "../components/categories/Categories";
import { Welcome } from "../components/welcome/Welcome";

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});

    return (
        <Routes>
            <Route path="/"
                element={
                    <>
                        <Outlet />
                    </>
                }>
                <Route index element={<Welcome />} />
                <Route path="categories" element={<Categories />} />
            </Route>
        </Routes>
    );
};