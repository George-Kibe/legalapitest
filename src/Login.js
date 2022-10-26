import React, {useState, useEffect} from 'react'

function Login() {
  const [checked, setChecked] = useState(true);
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  return (
    <div style={{padding:30}}>
        <h1>Sign in to continue</h1>
        <form onSubmit={handleSubmit} noValidate>
            <div style={{margin:10}}>
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
            </div>
            <div style={{margin:10}}>
                <label>
                    <input type="checkbox"
                        defaultChecked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    I agree with to the 
                    <a href='https://100087.pythonanywhere.com/policy/FB1010000000001665306290565391/website-privacy-policy/?redirect_url=https://george-kibe.github.io/legalapitest/'>
                         privacy policy and terms and conditions
                    </a>
                </label>
            </div>
            <button style={{margin:10}} type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default Login