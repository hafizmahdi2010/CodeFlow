import React, { useState } from 'react'
import { togglePassword } from '../help/Helper';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [isToggledPWD, setIsToggledPWD] = useState(false);

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("")

  const toggle = () => {
    togglePassword(".signUpPWD");
    setIsToggledPWD(!isToggledPWD);
  }

  async function SubmitForm(e) {
    e.preventDefault();

    let res = fetch("http://localhost:8000/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, name, email, password })
    }).then(data => data.json()).then(response => {
      if(response.success === true){
        navigate("/login")
      }
      else{
        setError(response.message)
      }
    });

    // let data = res.json();
    // console.log(data)
  }


  return (
    <>

      <div className="container flex flex-col items-center justify-center h-screen">
        <form onSubmit={SubmitForm} action="" className='signUpform disableSelect w-[30vw] h-[auto] bg-zinc-800 p-[20px] rounded-md shadow-xl'>
          <h3 className='text-2xl'>Sign Up</h3>

          <div className="inputBox mt-3 bg-zinc-900">
            <input onChange={(e) => { setUsername(e.target.value) }} value={username} placeholder='Enter Your Username' required />
          </div>

          <div className="inputBox mt-3 bg-zinc-900">
            <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" name='name' id='name' placeholder='Enter Your Name' required />
          </div>

          <div className="inputBox mt-3 bg-zinc-900">
            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name='email' id='email' placeholder='Enter Your Email' required />
          </div>

          <div className="inputBox mt-3 bg-zinc-900">
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} name='passowrd' id='passowrd' className='signUpPWD' placeholder='Enter Your Passowrd' required />
            {
              isToggledPWD ?
                <ion-icon onClick={(e) => { toggle() }} style={{ fontSize: "20px", cursor: "pointer", marginRight: "10px" }} name="eye-outline"></ion-icon>
                : <ion-icon onClick={(e) => { toggle() }} style={{ fontSize: "20px", cursor: "pointer", marginRight: "10px" }} name="eye-off-outline"></ion-icon>
            }
          </div>
          <span className='mt-3 text-[13px] text-error'>{error}</span>
          <p className='mt-2 text-[14px]'>Already Have An Account <Link to="/login" className='text-[#40A9F3]'>Login</Link></p>
          <button className='btnBlue mt-3 !text-[15px] justify-center !w-full !p-[10px]'>Sign Up</button>
        </form>
      </div>

    </>
  )
}

export default SignUp