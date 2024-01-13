import { MdEmail, MdPhone } from "react-icons/md"


const Contact = () => {
  return (
    <div id="contact" className='bg-[#181a1e] text-white h-[90vh] px-[6rem]'>
        <div className="">
            <h1 className='font-bold text-[27px] text-center pt-5'>Contact <span className="text-[#E99343]">Me</span></h1>
        </div>
        <div className="flex justify-center mt-[40px] gap-x-5">
          <button className="flex items-center gap-x-3 bg-white text-black rounded-sm px-4 py-1 font-semibold "> <span><MdEmail/></span> babatundej@gmail.com</button>
          <button className=" flex items-center gap-x-3 bg-white text-black rounded-sm px-4 py-1 font-semibold "><span><MdPhone/></span> 08012345678</button>
        </div>

        <div className=" w-[1000px] bg-[#181a1e] pt-[30px] flex flex-col mx-auto">
          <form className="space-y-3">
            <div className="">
              <input type="text" className="h-[50px] w-full rounded-sm outline-none bg-[#212529] p-2" placeholder="Your Name" />
            </div>
            <div className="">
              <input type="email" className="h-[50px] w-full rounded-sm bg-[#212529] outline-none p-2" placeholder="Email" />
            </div>
            <div className="">
              <input type="text" className="h-[50px] w-full rounded-sm bg-[#212529] p-2 border-none outline-none" placeholder="Subject" />
            </div>
            <div className="">
              <textarea className="h-[180px] w-full rounded-sm focus:bg-[#212529] bg-[#212529] border-none outline-none p-2" placeholder="Your Message" />
            </div>
            <button className=" text-white bg-[#E99343] rounded-md px-4 py-2 border-none font-semibold">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact