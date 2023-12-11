import React from "react";



const Login = () =>{
  return (
    <form className="login-form">
      <div className="form-items">
        <h1 className="title-login">Log in</h1>
        <label>Email</label>
          <input className="input" type="text" name="email" ></input>
        <label>Password</label>
          <input className="input" type="text" name="password" ></input>
        <button type='submit' >Registrame</button>
        </div>
    </form>
  )
}

export default Login;