import { useState } from "react"

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  })

  const handleInputChange = (event) => {
    const formDataCopy = { ...formData }
    if (event.target.id === "first-name-input") {
      formDataCopy.firstName = event.target.value
    }
    if (event.target.id === "last-name-input") {
      formDataCopy.lastName = event.target.value
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
            value={formData.firstName ? formData.firstName : ""}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className="form-item">
          <label htmlFor="last-name-input">Last Name: </label>
          <input
            className="form-input"
            type="text"
            id="last-name-input"
            value={formData.lastName ? formData.lastName : ""}
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
