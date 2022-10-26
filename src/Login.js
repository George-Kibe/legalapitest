import React, {useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import {GrCheckboxSelected, GrCheckbox} from "react-icons/gr"

function Login() {
  const [checked, setChecked] = useState(false);
  const currentURL = window.location.href
  const strings = currentURL.split("?token=")
  const token = strings[1] 
    
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  useEffect(() => {
    if(!token){
        return
    }
    const decoded = jwt_decode(token);
    console.log(decoded.isSuccess)
    setChecked(decoded.isSuccess)
    console.log(checked)
  }, [token])
  
  return (
    <div style={{padding:30}}>
        <h1>Sample website content</h1>        
        {/* <div style={{margin:10}}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
            />
        </div>
        <div style={{margin:10}}>
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
            />
        </div> */}
        <div style={{margin:10}}>
            {
                checked? <GrCheckboxSelected /> :<GrCheckbox />
            }                     
            <a style={{margin:10}} href='https://100087.pythonanywhere.com/policy/FB1010000000001665306290565391/website-privacy-policy/?redirect_url=https://george-kibe.github.io/legalapitest/'>
                I agree with to the privacy policy and terms and conditions
            </a>
        </div>
        <button style={{margin:10}} type="submit">Website content continued</button>
        
    </div>
  )
}

export default Login