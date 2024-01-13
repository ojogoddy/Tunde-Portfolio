import web from "../assets/wd.jpg"
import frontend from "../assets/fd.jpg"
import backend from "../assets/bd.jpg"
import mern from "../assets/mern.jpg"
const About = () => {
    const cardContent = [
        {
            pic: web,
            title: "WEB DEVELOPMENT",
            content: "As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence."
        },
        {
            pic: frontend,
            title: "FRONTEND DEVELOPMENT",
            content: "As a proficient frontend developer, I possess a keen eye for design and a deep understanding of user experience principles. Through my expertise in HTML, CSS, and JavaScript, I create visually appealing and responsive web interfaces that captivate users and enhance their interaction with websites."
        },
        {
            pic: backend,
            title: "BACKEND DEVELOPMENT",
            content: "With a strong backend development background, I excel in building robust and scalable web applications. Leveraging my skills in languages such as Python, Node.js, and databases like MySQL and MongoDB, I develop efficient server-side logic, APIs, and database integrations, ensuring seamless functionality and optimal performance."
        },
        {
            pic: mern,
            title: "BACKEND DEVELOPMENT",
            content: "As a skilled MERN stack developer, I specialize in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. With proficiency in both frontend and backend technologies, I deliver end-to-end solutions that combine intuitive user interfaces with powerful server-side functionalities."
        },
    ]
  return (
    <div id="about" className=" bg-[#181a1e] px-[5rem] pt-[140px] pb-[100px]">
        <div className="text-white  text-[27px] mx-auto mb-5 text-center font-extrabold w-[640px] ">
        Having a <span className='text-[#E99343]'>Strong Development</span> Process is Essential for <span className='text-[#E99343]'>Achieving Success </span>in Business.
      </div>
      <div className="flex flex-wrap mt-[40px] justify-center gap-5 shadow-md  ">
      {cardContent?.map((prop, index) =>(
        <div className="border-s-[2px] bg-[#212529] border-t-[2px] border-[#e99343] p-1 " key={index}>
            <div className="w-[370px]">
                <img src={prop.pic} alt="" />
            </div>
            
            <div className="text-[#E99343] text-[18px] font-bold my-4">
                {prop.title}
            </div>
            <div className="text-[13px] text-white  font-medium w-[370px] ">
                {prop.content}
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default About