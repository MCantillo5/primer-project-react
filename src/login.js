import React from "react";



const Login = () =>{
  return (
    <form className="login-form">
      <h1 className="title-login">Log in</h1>
        <div className="form-items">
        <label className="label">Email</label>
          <input className="input" type="text" name="email" ></input>
        <label className="label">Password</label>
          <input className="input" type="text" name="password" ></input>
        </div>
          <button className="btn" type='submit' >Registrame</button>
    </form>
  )
}

export default Login;