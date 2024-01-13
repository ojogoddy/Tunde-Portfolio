import html from "../assets/html.svg"
import css from "../assets/css.svg"
import git from "../assets/git.svg"
import react from "../assets/react.svg"
import redux from "../assets/redux.svg"
import expressjs from "../assets/express.svg"
import node from "../assets/node.svg"
import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import bootstrap from "../assets/bootstrap.svg"
import next from "../assets/next.svg"
import angular from "../assets/angular.svg"
import python from "../assets/python.svg"
import sass from "../assets/sass.svg"
import aws from "../assets/aws.svg"
import native from "../assets/react.svg"
const Skills = () => {
    const skills = [
        {icon: html, title: "HTML"},
        {icon: css, title: "CSS"},
        {icon: javascript, title: "Javascript"},
        {icon: bootstrap, title: "Bootstrap"},
        {icon: react, title: "React Js"},
        {icon: angular, title: "Angular"},
        {icon: python, title: "Python"},
        {icon: typescript, title: "Typescript"},
        {icon: redux, title: "Redux"},
        {icon: git, title: "Git"},
        {icon: tailwindcss, title: "TailwindCSS"},
        {icon: sass, title: "SASS"},
        {icon: expressjs, title: "Express Js"},
        {icon: node, title: "Node Js"},
        {icon: next, title: "Next Js"},
        {icon: native, title: "React Native"},
        {icon: aws, title: "AWS"},
    ]
  return (
    <div id="skills" className='bg-[#181a1e] text-white h-[90vh] px-[6rem]'>
        <div className="">
            <h1 className='font-bold text-[27px] text-center pt-5'>Skills & <span className="text-[#E99343]">Experience</span></h1>
        </div>
        <div className="flex justify-between mt-[40px] ">
            <div className=" w-[50%]">
                <h2 className="font-bold text-[20px]">Skills</h2>
               <div className="flex flex-wrap gap-y-4 gap-x-10 ml-5 pt-5">
               {skills?.map((prop, index)=>(
                    <div className="flex flex-col items-center" key={index}>
                        <div className="w-[40px] flex items-center h-[40px] mb-2">
                            <img src={prop.icon} alt="" />
                        </div>
                        <h3 className="text-[14px] w-[90px] text-center  font-semibold">{prop.title}</h3>
                    </div>
                ))}
               </div>
            </div>
            <div className="">
                <h2 className="font-bold text-[20px]">Experience</h2>
                <div className="pt-5 space-y-3">
                    <div className="flex gap-x-5">
                        <p className="text-[13px]">2019-2020</p>
                        <div className="">
                            <h2 className="font-semibold">Software Developer</h2>
                            <p className="text-[12px]">ALX-NG</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <p className="text-[13px]">2020-2021</p>
                        <div className="">
                            <h2 className="font-semibold">Frontend Developer</h2>
                            <p className="text-[12px]">ASUSU</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <p className=" text-[13px]">2021-2022</p>
                        <div className="">
                            <h2 className="font-semibold">Fullstack Developer</h2>
                            <p className="text-[12px]">Cashbox Finance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="font-bold text-[20px]">Education</h2>
                <div className="flex items-start gap-x-5 pt-5">
                        
                        <div className="">
                            <h2 className="font-semibold">B.Eng in Estate Mgt</h2>
                            <p className="text-[12px]">Federal University of Technology, <br /> Minna, Nigeria</p>
                        </div>
                        <p className="text-[13px]">2021-2022</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills