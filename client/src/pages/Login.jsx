import React, { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [msg,setMsg] = useState('')
  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post('/api/auth/login',{ email, password })
      setMsg('Login success — token received (see console)')
      console.log(res.data)
    }catch(err){ setMsg(err?.response?.data?.msg || 'Login failed') }
  }
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form card" onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="button">Login</button>
        <div>{msg}</div>
      </form>
    </div>
  )
}
