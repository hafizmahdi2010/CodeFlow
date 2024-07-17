import React, { useState } from 'react'
import { togglePassword } from '../help/Helper';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [isToggledPWD, setIsToggledPWD] = useState(false);

  const toggle = () => {
    togglePassword(".LoginPWD");
    setIsToggledPWD(!isToggledPWD);
  }

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function SubmitForm(e) {
    e.preventDefault();

    let res = fetch("http://localhost:8000/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(data => data.json()).then(response => {
      if(response.success === true){
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", response.token);

        navigate("/");
      }
      else{
        setError(response.message)
      }
    });

  
  }

  return (
    <>

      <div className="container flex flex-col items-center justify-center h-screen">
        <form onSubmit={SubmitForm} action="" className='disableSelect signUpform w-[30vw] h-[auto] bg-zinc-800 p-[20px] rounded-md shadow-xl'>
          <h3 className='text-2xl'>Login</h3>

          <div className="inputBox mt-3 bg-zinc-900">
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name='email' id='email' placeholder='Enter Your Email' required />
          </div>

          <div className="inputBox mt-3 bg-zinc-900">
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name='passowrd' id='passowrd' className='LoginPWD' placeholder='Enter Your Passowrd' required />
            {
              isToggledPWD ?
                <ion-icon onClick={(e) => { toggle() }} style={{ fontSize: "20px", cursor: "pointer", marginRight: "10px" }} name="eye-outline"></ion-icon>
                : <ion-icon onClick={(e) => { toggle() }} style={{ fontSize: "20px", cursor: "pointer", marginRight: "10px" }} name="eye-off-outline"></ion-icon>
            }
          </div>

          <span className='mt-3 text-[13px] text-error'>{error}</span>
          <p className='mt-2 text-[14px]'>Don't Have An Account <Link to="/singUp" className='text-[#40A9F3]'>Sign Up</Link></p>
          <button className='btnBlue mt-3 !text-[15px] justify-center !w-full !p-[10px]'>Login</button>
        </form>
      </div>

    </>
  )
}

export default Login