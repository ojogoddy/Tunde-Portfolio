import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {MdMenu} from "react-icons/md"

//npm i react-scroll


const Header:React.FC = () => { 
  const [activeLink, setActiveLink] = useState("")
  const [menuBar, setMenuBar] = useState(false)

  
  return (
    <div className='sticky top-0 z-10'>
        <div className='flex items-center justify-between px-[3rem] py-[1rem] bg-[#181a1e] '>
            <div className="flex items-center text-white">
            <h1 className='text-[40px] font-bold'>BA<span className='text-[#E99343] text-[30px]'>J</span></h1>
            </div>
            
            <div className="flex items-center ">
            
          <div className="flex items-center justify-center space-x-8 text-[1rem] font-semibold sm:hidden">

          
          <Link to="home">
              <div onClick={()=> setActiveLink("")}    className={activeLink === "home" ? "text-[#E99343]" : "text-white"}>HOME</div>
            </Link>
            <Link to="about">
              <div onClick={()=> setActiveLink("about")}    className={activeLink === "about" ? "text-[#E99343]" : "text-white"}>ABOUT</div>
            </Link>
            <Link to="skills">
              <div onClick={()=> setActiveLink("skills")}    className={activeLink === "skills" ? "text-[#E99343]" : "text-white"}>SKILLS</div>
            </Link>
            <Link to="work">
              <div onClick={()=> setActiveLink("work")}    className={activeLink === "work" ? "text-[#E99343]" : "text-white"}>WORK</div>
            </Link>
            
            <Link to="contact">
              <div onClick={()=> setActiveLink("contact")}    className={activeLink === "contact" ? "text-[#E99343]" : "text-white"}>CONTACT</div>
            </Link>
          </div>
        
            </div>
            <div className=" hidden sm:flex md:hidden text-white" onClick={()=> setMenuBar(!menuBar)} >
              <MdMenu size="33px"/>

              {menuBar && (
                <div className="absolute left-0 p-4 top-[70px] text-center  w-full bg-black pb-6 flex flex-col">

            <div className="  text-[1rem]">
            <Link to="/">
              <div onClick={()=> setActiveLink("home")} className={activeLink === "home" ? "text-[#E99343]" : "text-white"}>HOME</div>
            </Link>
            <Link to="about">
              <div onClick={()=> setActiveLink("about")} className={activeLink === "about" ? "text-[#E99343]" : "text-white"}>ABOUT</div>
            </Link>
            <Link to="skills">
              <div onClick={()=> setActiveLink("skills")} className={activeLink === "skills" ? "text-[#E99343]" : "text-white"}>SKILLS</div>
            </Link>
            <Link to="work">
              <div onClick={()=> setActiveLink("work")} className={activeLink === "work" ? "text-[#E99343]" : "text-white"}>WORK</div>
            </Link>
            
            <Link to="contact">
              <div onClick={()=> setActiveLink("contact")} className={activeLink === "contact" ? "text-[#E99343]" : "text-white"}>CONTACT</div>
            </Link>
          </div>   
        </div>
                
              )}
            </div>
        </div>
        

    </div>

  )
}

export default Header
