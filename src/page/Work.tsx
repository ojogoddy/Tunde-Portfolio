import { useState } from "react"


const Work = () => {
    const [active, setActive] = useState(0)
    const all = ["All", "React Js", "Javascript", "Node Js", "Next Js"]
  return (
    <div id="work" className='bg-[#181a1e] text-white h-[90vh] px-[6rem]'>
        <div className="">
            <h1 className='font-bold text-[27px] text-center pt-5'>My Creative <span className="text-[#E99343]">Portfolio</span></h1>
        </div>
        <div className="flex gap-x-6 mt-[40px] justify-center">
            {all?.map((prop, index)=>(
                <div key={index} className={ ` px-4 py-1 rounded-sm font-medium  ${active === index ? "bg-[#e99343] text-white" : "text-black bg-white"}`} onClick={()=>setActive(index)} >
                    {prop}
                </div>
            ))}
        </div>


    </div>
  )
}

export default Work