import React , {useState} from  'react';
import './Login.css'


const Login = ()=>{

  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [error,setError] = useState('');

const handleSubmit =(e)=>{
  e.preventDefault();
    if (email === '' || password === '') {
  setError("please fill all details")
  return;
}

setError();

console.log("Email:",email);
console.log("Password:",password);

};

return(
  <div className='login-container'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className='login-form'>
      <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        id="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required/>
      </div>
      <div className='form-group'>
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        id="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required />
      </div>
      {error && <p className='error'>{error}</p>}
      <button type='submit' className='submit-button'>Login</button>


    </form>

  </div>

);


};

export default Login;

