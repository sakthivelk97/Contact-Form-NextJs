'use client'

import Link from 'next/link';

import { useState } from "react";


export default function ContactForm() {
 
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    

    function handleChange(e){
    
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
    })
    
    } 



return(
    <form className="flex flex-col gap-5" >
      <div className='text-center '><h1 className='font-bold text-xl'>Next JS Form</h1></div>
    <div className="flex gap-4 mt-4">
    <label className='font-bold' htmlFor="name">Name: </label>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className='w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
      />
      </div>

      <div className="flex gap-5 w-full">
      <label className='font-bold' htmlFor="name">Email: </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className='w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
      />
      </div>

      <div className="flex gap-5">
      <label className='font-bold' htmlFor="name">Message: </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className='w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
      />
      </div>
      <div className='flex justify-center'>
      <Link href={{ pathname: '/api/submittedForm', query: formData }}>
        <button type="submit" className='font-bold text-center text-white p-2 px-3 rounded bg-red-500 hover:bg-red-700 mt-5 justify-center'>Submit</button>
      </Link>
      </div>
    </form>
  );
}