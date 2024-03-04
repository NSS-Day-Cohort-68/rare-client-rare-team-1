import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
