"use client"
import { useEffect, useState } from "react";
export default function Page(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes?limit=5")
        .then((res)=>res.json())
        .then((data)=>setdata(data.recipes))
            
        
    },[])
    return(
       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
         {
            data.map((item)=>(
                <div key={item.id} >
                <p>{item.name}</p>
                <p>Preperation Time {item.prepTimeMinutes}</p>
                <p>Savings {item.servings}</p>
            </div>
            ))
         }
       </div>
      
    )
}
