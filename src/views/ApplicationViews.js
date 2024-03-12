import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Categories } from "../components/categories/Categories"
import { Welcome } from "../components/welcome/Welcome"
import { CreateCategory } from "../components/categories/CreateCategory"
import { Tags } from "../components/tags/Tags"
import { Navbar } from "../navbar/Navbar"

export const ApplicationViews = () => {
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
        <Route path="tags" element={<Tags />} />
      </Route>
    </Routes>
  )
}
