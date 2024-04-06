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
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
const AboutMe = () =>{
    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])
    return( 
        <div className=" gap-2 flex flex-row flex-wrap justify-center items-center      ">
           
            <div className=" flex flex-col gap-6 justify-center items-center py-6   max-sm:py-12 ">
                {/* main parent div of about me */}
                <div data-aos="fade-right" className="h-[20rem] w-[80rem]  flex flex-row justify-center items-center gap-8 
                
                
                max-sm:w-[24rem] max-sm:h-[34rem]  max-sm:flex max-sm:flex-col   sm:max-lg:w-full sm:max-lg:h-[24rem]">

                    <div className="h-24 w-24 glass flex flex-col justify-center items-center    rounded-full 
                    max-sm:h-18 max-sm:w-18 hover:-translate-y-1 hover:scale-110  ">
                        <h1 className="text-black  font-serif text-center after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[4.3rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">About Me</h1>
                    </div>
                    <div className="h-6 w-6 border  shadow-2xl bg-white rounded-full hover:animate-ping"></div>
                    <div className="h-6 w-6 border  shadow-2xl bg-white rounded-full hover:animate-ping"></div>
                    <div className="h-6 w-6 border max-sm:hidden shadow-xl bg-white rounded-full "></div>
                    <div className="h-[17rem] w-[26rem] glass  rounded-md flex flex-col justify-center items-center gap-1
                    max-sm:w-[21rem] max-sm:h-[20rem] hover:-translate-y-1 hover:scale-110 ">
                    <h1 className="text-md text-black text-center max-sm:text-md font-serif ">
                      Hello I'm Adeshkumar S N .I'm Software Developer . I have studied Information Science at K.L.E Institute of Technology"            
                    </h1>
                    <h1 className="text-md text-black text-center  max-sm:text-md font-serif">
                        I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals.
                    </h1 >
                    <h1 className="text-md text-black text-center max-sm:text-md font-serif">
                         Work experiences in Smart MedTech. Let's collaborate and create remarkable web experiences together !
                    </h1>  
                    </div>
                </div>
                <div  data-aos="fade-up" className="h-[18rem] w-[80rem] flex flex-row justify-end items-center gap-8 
                
                max-sm:w-[26rem] max-sm:h-[58rem] max-sm:flex   max-sm:flex-col   max-sm:justify-start 
                 sm:max-lg:w-full sm:max-lg:h-[28rem] ">
                    <div className="h-24 w-24 glass  flex flex-col justify-center items-center rounded-full hover:-translate-y-1 hover:scale-110 ">
                        <h1 className="text-black font-serif text-center after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[2.5rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Skills</h1>
                    </div>
                    <div className="h-6 w-6   shadow-xl bg-white rounded-full"></div>
                    <div className="h-6 w-6   shadow-xl bg-white rounded-full"></div>
                    <div className=" h-full w-[57%] grid grid-row-3 
                        max-sm:h-[44rem] max-sm:w-[90%]  ">
                        <div className="h-full w-full flex flex-row flex-wrap justify-center items-center gap-20 max-sm:p-2 sm:max-lg:gap-6">
                            <div className="h-20 w-20 glass bg-white flex flex-col justify-center items-center hover:-translate-y-1 hover:scale-110 ">
                                <Image src={html} className="h-8 " alt="html" />
                                <h1 className="text-black text-sm font-serif">
                                    HTML
                                </h1>
                            </div> 
                            <div className="h-20 w-20 glass bg-white  shadow-2xl shadow-black/60  flex flex-col justify-center items-center gap-2
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={css} className="h-8 w-8" alt="css" />
                            <h1 className="text-black text-md font-serif">
                                    css
                                </h1>
                            </div> 
                            <div className="h-20 w-20 glass bg-white  shadow-2xl shadow-black/60  flex flex-col justify-center items-center gap-2 
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={javascript} className="h-8 w-8" alt="css" />
                            <h1 className="text-black text-sm font-serif">
                                    Javascript
                                </h1>
                            </div> 
                            <div className="h-20 w-20 rounded-xl bg-white flex flex-col justify-center items-center 
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={node} className="h-12 w-12" alt="css" />
                            <h1 className="text-black text-sm font-serif" >
                                    Nodejs
                                </h1>
                            
                            </div> 
                       
                        
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center 
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={expressJs} className="h-10 w-10" alt="css" />
                                <h1 className="text-black text-sm font-serif">
                                    expressJs
                                </h1>
                                
                            </div> 
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center
                            hover:-translate-y-2 hover:scale-110 ">
                                <Image src={react} className="" alt="css" />
                                <h1 className="text-black text-sm font-serif">
                                    ReactJs
                                </h1>
                            </div> 
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60  bg-white flex flex-col justify-center items-center gap-3
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={nextjs} className="h-3" alt="css" />
                                <h1 className="text-black text-sm font-serif">
                                    NextJs
                                </h1>
                            </div> 
                            <div className="h-20 w-20 text-sm  rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col gap-1 justify-center items-center 
                            hover:-translate-y-2 hover:scale-110 ">
                                <Image src={tailwindcss} className="h-8 w-8" alt="css" />
                                <h1 className="text-black text-sm font-serif">
                                    Tailwind Css
                                </h1>
                            </div> 
                            

                  
                        
                            <div className="h-20 w-20 rounded-xl shadow-2xl shadow-black/60 bg-white flex flex-col justify-center items-center
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={mysql} className="h-18 w-18" alt="css" />
                                <h1 className="text-black text-sm font-serif">
                                    MySql
                                </h1>
                            </div> 
                            <div className="h-20 w-20 text-sm  rounded-xl shadow-2xl shadow-black/60 bg-white flex  flex-col     justify-center items-center 
                            hover:-translate-y-2 hover:scale-110 ">
                            <Image src={aws} className="h-12 w-12" alt="css" />
                                <h1 className="text-black text-sm font-serif">
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
