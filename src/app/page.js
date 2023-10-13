'use client'
//1import area
import { useState } from "react";

//2defination area
let name1 = 'kundan'; 
export default function Home() {
let name2 = 'ravi';
  //2.1 hooks area
const [name3, setName] = useState('Boss'); //hook1

  return (
   <>
    <div> hello kuldeep</div>
    <div> hello {name1}</div>
    <div> hello {name2}</div>
    <div> hello {name3}</div>
   </>
  )
}
//3 export area