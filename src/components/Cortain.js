import { useEffect, useState } from "react"
import AOS from 'aos';

export const Cortain = () => {
  const [loadPage, setLoadPage] = useState(false)
  
  useEffect(() => {
    setLoadPage(true);

    setTimeout(() => {
      AOS.init();
    }, 1000);
    
  }, [])
  
  return (
    <>
      <div className={`left-cortain ${loadPage ? "active" : "active"}`}></div>
      <div className={`right-cortain ${loadPage ? "active" : "active"}`}></div>
    </>
  )
}
