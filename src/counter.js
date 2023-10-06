import React from 'react';
import { useState } from 'react';

export default function Counter(){
    const [count,setCount] = useState(0)
    function Inc (){
        document.getElementsByTagName('div')[0].innertext="Hello"
    }
return(
    <>
    <div> counter</div>
    <button onClick={(()=>setCount(count - 1))}>-</button>
    <h1>{count}</h1>
    <button onClick={(()=>setCount(count+1))}>+</button>
    </>
)
   }

