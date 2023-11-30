import React from "react";


function Login(){
  return (
    <div className="section">
      <form className='section-items'>
      <h1>Log in</h1>
        <div className='datas'>
        <label>Email
          <input type="text" name="email"  ></input>
        </label>

        <label>Password
          <input type="text" name="password"></input>
        </label>
        </div>
        <div className='btn'>
          <button type='submit' >Registrame</button>
        </div>
      </form>
    </div>
  )
}

export default Login;