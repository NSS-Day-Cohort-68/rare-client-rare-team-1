import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  check_for_duplicate_email,
  register_user,
} from "../../managers/userManager"

export const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  })

  const handleInputChange = (event) => {
    const formDataCopy = { ...formData }
    if (event.target.id === "first-name-input") {
      formDataCopy.first_name = event.target.value
    }
    if (event.target.id === "last-name-input") {
      formDataCopy.last_name = event.target.value
    }
    if (event.target.id === "username-input") {
      formDataCopy.username = event.target.value
    }
    if (event.target.id === "email-input") {
      formDataCopy.email = event.target.value
    }
    setFormData(formDataCopy)
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const userCopy = { ...formData }

    const expectedKeys = ["first_name", "last_name", "username", "email"]

    const missingValues = []
    expectedKeys.forEach((key) => {
      if (userCopy[key] === "") {
        missingValues.push(key)
      }
    })

    if (missingValues.length !== 0) {
      window.alert("Please fill out all fields before clicking Register.")
    } else {
      check_for_duplicate_email(userCopy["email"]).then((result) => {
        if (result["valid"] === false) {
          register_user(userCopy).then(() => {
            navigate("/")
          })
        } else {
          window.alert("Your email has already been registered.")
        }
      })
    }
  }

  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="form-heading">Register</h2>
        <fieldset className="form-item">
          <label htmlFor="first-name-input">First Name: </label>
          <input
            className="form-input"
            type="text"
            id="first-name-input"
            value={formData.first_name ? formData.first_name : ""}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="form-item">
          <label htmlFor="last-name-input">Last Name: </label>
          <input
            className="form-input"
            type="text"
            id="last-name-input"
            value={formData.last_name ? formData.last_name : ""}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="form-item">
          <label htmlFor="username-input">Username: </label>
          <input
            className="form-input"
            type="text"
            id="username-input"
            value={formData.username ? formData.username : ""}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="form-item">
          <label htmlFor="email-input">Email: </label>
          <input
            className="form-input"
            type="text"
            id="email-input"
            value={formData.email ? formData.email : ""}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="form-btn">
          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>
        </fieldset>
      </form>
    </div>
  )
}
