import React, { useEffect, useState } from 'react';
import "./Scroll.css";

const Scroll = () => {
    const [ScrollUp, setScrollUp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setScrollUp(true)
            }else{
                setScrollUp(false)
            }
        })
    }, [])
    const scrollBtn = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }
    
  return (
    <div>
{ScrollUp && (
    <button onClick={scrollBtn}>^</button>
)}
    </div>
  )
}

export default Scroll