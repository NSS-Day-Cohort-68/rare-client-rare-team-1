import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Navbar } from "./navbar/Navbar"

export const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } />
    </Routes> </>
  );
};