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
import { NewCommentForm } from "../components/comments/CommentForm.js"
import { PostDetails } from "../components/posts/PostDetails.js"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [currentPostId, setCurrentPostId] = useState(0)

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
        <Route
          path="post-details/:postId"
          element={<PostDetails setCurrentPostId={setCurrentPostId} />}
        />

        <Route
          path="create-comment"
          element={
            <NewCommentForm
              currentUser={currentUser}
              currentPostId={currentPostId}
            />
          }
        />
      </Route>
    </Routes>
  )
}
