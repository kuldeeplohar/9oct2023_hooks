'use client'
//import area
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

//2.difination area
export default function Page() {
    //2.1 hooks
   const[name4,setName4] = useState('rahul')//hook1
  
   useEffect(()=>{//hook2
        console.log(`Hello ${name4} ,page loaded successfully`)
    },[]);
    
    let x = ()=>{
        console.log('okkk')
       let y = prompt('enter your name?');
        setName4(y);
    }

    //function returning JSX
  return (
   <>
   <div >Hello {name4}</div>
   <Button variant="contained" onClick={x}>Contained </Button>

   </>
  )
}
//export area
