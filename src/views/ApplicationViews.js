import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Categories } from "../components/categories/Categories"
import { Welcome } from "../components/welcome/Welcome"
import { CreateCategory } from "../components/categories/CreateCategory"
import { Navbar } from "../navbar/Navbar"

export const ApplicationViews = () => {
  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const localRareUser = JSON.parse(localStorage.getItem("rare_user"))
    if (localRareUser) {
      setLoggedInUser(localRareUser)
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Route>
    </Routes>
  )
}
