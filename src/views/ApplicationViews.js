import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Categories } from "../components/categories/Categories"
import { Welcome } from "../components/welcome/Welcome"
import { CreateCategory } from "../components/categories/CreateCategory"
import { NewTagForm } from "../components/tags/TagForm"
import { Tags } from "../components/tags/Tags"
import { Navbar } from "../navbar/Navbar"
import { Logout } from "../components/auth/Logout"
import { CreatePostForm } from "../components/forms/CreatePostForm.js"
import { AllPosts } from "../components/posts/AllPosts"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localRareUser = JSON.parse(localStorage.getItem("rare_user"))
    if (localRareUser) {
      setCurrentUser(localRareUser)
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
        <Route path="category-management" element={<Categories />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="tags" element={<Tags />} />
        <Route path="new-tag" element={<NewTagForm />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="create-post"
          element={<CreatePostForm currentUser={currentUser} />}
        />
        <Route path="posts" element={<AllPosts />} />
      </Route>
    </Routes>
  )
}
