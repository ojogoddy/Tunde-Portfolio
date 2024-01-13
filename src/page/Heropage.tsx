import hero from "../assets/myPic.jpg"
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import react from "../assets/tailwindcss.svg"
import tailwindcss from "../assets/react.svg"
import python from "../assets/python.svg"
import About from "./About"
import Skills from "./Skills"
import Work from "./Work"
import Contact from "./Contact"

const Heropage = () => {
  return (
    <div className="bg-[#181a1e] pt-[30px] h-[90vh]">
        <div className="rounded-full overflow-hidden mx-auto   relative w-[490px] h-[490px]">
            <img src={hero} className="w-full h-full object-cover" />
            
        </div>
        <div className="absolute top-[15%] left-[20%] bg-transparent">
        <div className=" mb-4  ">
                <p className="bg-white h-[80px] w-[150px] flex items-center justify-center  flex-col rounded-2xl text-black font-medium ">Hello, I am <span className="text-[#E99343] bg-transparent font-semibold text-[20px]">Babatunde</span></p>
        </div>
        <div className=" bg-white h-[80px] w-[150px] flex items-center font-semibold justify-center text-[12px] flex-col rounded-2xl text-black  ">
                <p className=" bg-transparent text-black">WEB DEVELOPER </p>
                <p className="bg-transparent text-black ">SOFTWARE ENGINEER</p>
        </div>
        <div className="flex h-[80px] items-center mt-5 justify-center gap-x-3">
            <div className=" border-2 rounded-full w-[30px] flex items-center justify-center h-[30px] text-[15px] p-1 text-[#E99343] border-[#E99343]">
                <FaTwitter/>
            </div>
            <div className=" border-2 rounded-full w-[45px] flex items-center justify-center h-[45px] mt-10  text-[#E99343] border-[#E99343]">
                <FaLinkedinIn />
            </div>
            <div className=" border-2 rounded-full w-[30px] flex items-center justify-center h-[30px] text-[#E99343] text-[15px] p-1 border-[#E99343]">
                <FaFacebookF/>
            </div>
            
        </div>
        </div>

        <div className="absolute right-[25%] top-[23%] h-[500px] space-y-20">
            <div className="w-[70px] h-[70px] bg-white  rounded-full p-3">
            <img src={react} alt="" className="w-full h-full object-fit" />
            </div>
            <div className="w-[70px] h-[70px] ml-20 bg-white rounded-full p-3">
            <img src={tailwindcss} alt="" className="w-full h-full object-fit" />
            </div>
            <div className="w-[70px] h-[70px]  bg-white rounded-full p-3">
            <img src={python} alt="" className="w-full h-full object-fit" />
            </div>
            
            
        </div>
        <div className=" bg-[#181a1e]">
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    </div>
  )
}

export default Heropage