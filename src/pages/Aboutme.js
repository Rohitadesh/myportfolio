import TerminalSkills from "./components/TerminalSkills";
import TerminalData from "./components/terminal";
import css from '../../public/css.png'
import html from '../../public/html.jpeg'
import aws from '../../public/aws.png'
import javascript from '../../public/download.png'
import mysql from '../../public/mysql.png'
import expressJs from '../../public/expreass.png'
import node  from '../../public/node.png'
import nextjs from '../../public/next.svg'
import tailwindcss from '../../public/tailwind.png'
import react from '../../public/react.png'
import Image from "next/image";
const AboutMe = () =>{

   
    return(
        <div className="h-[85%] gap-2 flex flex-row flex-wrap justify-center items-center  ">
           
            <div className=" flex flex-col gap-6 justify-center items-center py-6   max-sm:py-12 ">
                {/* main parent div of about me */}
                <div className="h-[20rem] w-[80rem]  flex flex-row justify-center items-center gap-8 
                
                
                max-sm:w-[24rem] max-sm:h-[34rem]  max-sm:flex max-sm:flex-col   sm:max-lg:w-full sm:max-lg:h-[24rem]">

                    <div className="h-24 w-24 glass flex flex-col justify-center items-center    rounded-full 
                    max-sm:h-18 max-sm:w-18  ">
                        <h1 className="text-black text-center">About Me</h1>
                    </div>
                    <div className="h-6 w-6 border  shadow-xl bg-white rounded-full"></div>
                    <div className="h-6 w-6 border  shadow-xl bg-white rounded-full"></div>
                    <div className="h-6 w-6 border max-sm:hidden shadow-xl bg-white rounded-full"></div>
                    <div className="h-[17rem] w-[26rem] glass  rounded-md flex flex-col justify-center items-center gap-1
                    max-sm:w-[21rem] max-sm:h-[20rem]">
                    <h1 className="text-md text-black text-center max-sm:text-md ">
                      Hello I'm Adeshkumar S N .I'm Software Developer . I have studied Information Science at K.L.E Institute of Technology"            
                    </h1>
                    <h1 className="text-md text-black text-center  max-sm:text-md ">
                        I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals.
                    </h1 >
                    <h1 className="text-md text-black text-center max-sm:text-md">
                         Work experiences in Smart MedTech. Let's collaborate and create remarkable web experiences together !
                    </h1>  
                    </div>
                </div>
                <div className="h-[18rem] w-[80rem] flex flex-row justify-end items-center gap-8 
               
                max-sm:w-[26rem] max-sm:h-[58rem] max-sm:flex   max-sm:flex-col   max-sm:justify-start 
                 sm:max-lg:w-full sm:max-lg:h-[28rem]">
                    <div className="h-24 w-24 glass  flex flex-col justify-center items-center rounded-full">
                        <h1 className="text-black text-center">Skills</h1>
                    </div>
                    <div className="h-6 w-6   shadow-xl bg-white rounded-full"></div>
                    <div className="h-6 w-6   shadow-xl bg-white rounded-full"></div>
                    <div className=" h-full w-[57%] grid grid-row-3 
                        max-sm:h-[44rem] max-sm:w-[90%] ">
                        <div className="h-full w-full flex flex-row flex-wrap justify-center items-center gap-20 max-sm:p-2 sm:max-lg:gap-6">
                            <div className="h-20 w-20 glass bg-white flex flex-col justify-center items-center">
                                <Image src={html} className="h-8 " alt="html" />
                                <h1 className="text-black text-sm">
                                    HTML
                                </h1>
                            </div> 
                            <div className="h-20 w-20 glass bg-white  shadow-2xl shadow-black/60  flex flex-col justify-center items-center gap-2">
                            <Image src={css} className="h-8 w-8" alt="css" />
                            <h1 className="text-black text-md">
                                    css
                                </h1>
                            </div> 
                            <div className="h-20 w-20 glass bg-white  shadow-2xl shadow-black/60  flex flex-col justify-center items-center gap-2 ">
                            <Image src={javascript} className="h-8 w-8" alt="css" />
                            <h1 className="text-black text-sm">
                                    Javascript
                                </h1>
                            </div> 
                            <div className="h-20 w-20 rounded-xl bg-white flex flex-col justify-center items-center">
                            <Image src={node} className="h-12 w-12" alt="css" />
                            <h1 className="text-black text-sm">
                                    Nodejs
                                </h1>
                            
                            </div> 
                       
                        
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center">
                            <Image src={expressJs} className="h-10 w-10" alt="css" />
                                <h1 className="text-black text-sm">
                                    expressJs
                                </h1>
                                
                            </div> 
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center">
                                <Image src={react} className="" alt="css" />
                                <h1 className="text-black text-sm">
                                    ReactJs
                                </h1>
                            </div> 
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60  bg-white flex flex-col justify-center items-center gap-3">
                            <Image src={nextjs} className="h-3" alt="css" />
                                <h1 className="text-black text-sm">
                                    NextJs
                                </h1>
                            </div> 
                            <div className="h-20 w-20 text-sm  rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col gap-1 justify-center items-center ">
                                <Image src={tailwindcss} className="h-8 w-8" alt="css" />
                                <h1 className="text-black text-sm">
                                    TailwindCss
                                </h1>
                            </div> 
                            

                  
                        
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center">
                            <Image src={mysql} className="h-18 w-18" alt="css" />
                                <h1 className="text-black text-sm">
                                    MySql
                                </h1>
                            </div> 
                            <div className="h-20 w-20 text-sm  rounded-xl shadow-2xl shadow-black/60 bg-white flex  flex-col     justify-center items-center ">
                            <Image src={aws} className="h-12 w-12" alt="css" />
                                <h1 className="text-black text-sm">
                                    AWS
                                </h1>
                            </div> 
                
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe;