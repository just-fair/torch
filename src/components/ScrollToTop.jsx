
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {

    const {pathname} = useLocation();
    const prevPath = useRef(pathname);
    
    useEffect(()=>{
        if(pathname !== prevPath.current){
          window.scrollTo(0, 0);
          prevPath.current=pathname;
        }
        
    },[pathname])

  return null
}

export default ScrollToTop
