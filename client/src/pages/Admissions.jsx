import React, { useState } from 'react'

export default function Admissions(){
  const [form,setForm]=useState({name:'', email:'', grade:''})
  const submit=(e)=>{ e.preventDefault(); alert('Form submitted (stub)'); }
  return (
    <div className="container">
      <h2>Admissions</h2>
      <form className="form card" onSubmit={submit}>
        <input placeholder="Student name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Grade applying for" value={form.grade} onChange={e=>setForm({...form,grade:e.target.value})} />
        <button className="button">Apply</button>
      </form>
    </div>
  )
}
