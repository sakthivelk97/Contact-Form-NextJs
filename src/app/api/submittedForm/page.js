'use client'


import {useSearchParams } from 'next/navigation'


const SubmittedPage = () => {
 
 const name = useSearchParams().get('name')
 const email = useSearchParams().get('email')
 const message = useSearchParams().get('message')
//  console.log(name);
//  console.log(email);
//  console.log(message);


  return (
    <div className='flex flex-col gap-6 min-h-screen justify-center items-center'>
      <div><h1 className='pr-5 text-xl font-bold'>Form Submitted Successfully</h1></div>
      {name || email || message ?
        <div className='flex flex-col  gap-5 place-content-center'>
          <p><span className='font-bold'>Name: </span>{name}</p>
          <p><span className='font-bold'>Email: </span> {email}</p>
          {message ?
          <p><span className='font-bold'>Message: </span>{message}</p>
        :<p></p>}
        </div> 
        :<div>You din't enter anything in Prev Form</div>
      }
    </div>
  );
};

export default SubmittedPage;