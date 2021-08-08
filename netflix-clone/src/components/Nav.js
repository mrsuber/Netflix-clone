import '../css/Nav.css'
import logo from '../images/netflix_logo.png'
import avatar from '../images/avata.jpg'
import {useEffect,useState} from 'react'


function Nav(){
  const [show, handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
      }else handleShow(false)

    })
    return () =>{
      window.removeEventListener("scroll");
    }

  },[])

  return(
    <div className={`nav ${show && "nav__black" }`}>
    <img
      className="nav__logo"
      src={logo}
    />
    <img
      className="nav__avatar"
      src={avatar}
    />
    </div>
  )
}

export default Nav
