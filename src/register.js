function Register(){
  return (
    <form className='form-register'>
      <div className='form-group'>
        <h1 className="title-register">Check in</h1>
        <label>Name</label>
          <input type='text' name='Name'></input>
        <label>Email</label>
          <input type='text' name='email'></input>
        <label>Password</label>
          <input type='text' name='password'></input>
        <button type='submit'>Registrarme</button>
      </div>
    </form>
  )
}

export default Register;