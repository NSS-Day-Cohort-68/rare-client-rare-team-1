import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login_user } from "../../managers/userManager"

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleLogin = (event) => {
    event.preventDefault()

    login_user(email).then((token) => {
      if (token["valid"] === true) {
        localStorage.setItem("rare_user", JSON.stringify(token))
        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="form-heading">Login</h2>
        <fieldset className="form-item">
          <label htmlFor="email-input">Email: </label>
          <input
            className="form-input"
            type="text"
            id="email-input"
            value={email ? email : ""}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </fieldset>
        <fieldset className="form-btn">
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
      </form>
      <div className="message-container">
        <h4>Not a user yet?</h4>
        <button
          className="register-link"
          onClick={() => {
            navigate("/register")
          }}
        >
          Click Here To Register
        </button>
      </div>
    </div>
  )
}
