function Register(){
  return (
    <div className='form-register'>
      <form className='form-items'>
        <h1>Registrate</h1>
        <label>Name</label>
        <input type='text' name='Name'></input>
        <label>Email</label>
        <input type='text' name='email'></input>
        <label>Password</label>
        <input type='text' name='password'></input>

        <button type='submit' className='btn'>Registrarme</button>
      </form>
    </div>
  )
}

export default Register;