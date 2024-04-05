import { IoCloseCircle } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";

const TerminalData = ({data}) =>{
    console.log(data)
    const [type,setType]=useState('')
    
    
    return(
        <div className="  h-[70%] w-[60%] ">
        <div className="h-[3rem] w-full  grid grid-cols-12 bg-[#222222] rounded-tl-2xl rounded-tr-2xl ">
            <div className="rounded-md p-2  h-full w-full ">
               <p className="border border-black">
                    
               </p>
            </div>
            <div className="rounded-md col-span-8 h-full w-full   flex flex-col justify-center items-center">
                <h1 className="text-xl text-white">My Terminal</h1>
            </div>
            <div className="rounded-md h-full w-full col-span-1   flex flex-row  justify-end gap-2  items-center ">
                <div className="p-2  bg-[#373737]  rounded-md">
                    <h1 className="text-xl text-white "><IoMdMenu /></h1>
                    </div>
                    <div className="p-2 rounded-md bg-[#373737]">
                    <h1 className="text-xl text-white "><IoSearchOutline /></h1>
                    </div>
                </div>
            <div className="rounded-md h-full w-full col-span-2  flex flex-row  justify-evenly items-center ">
               
                <div className="p-2  bg-[#303030] rounded-full">
                    <h1 className="h-2 w-2  text-md relative bottom-4 text-white">_</h1>
                </div>
               
                <div className="p-2  bg-[#303030] rounded-full">
                    <h1 className="h-2 w-2 border border-white "></h1>
                </div>
                <div className="p-2 flex justify-center flex-col items-center bg-[#303030] rounded-full ">
                    <h1 className="h-2 w-2 text-white relative bottom-2 text-sm ">x</h1>
                </div>
               
            </div>
    
        </div>
        <div className="h-[25rem] w-full  bg-[#300a24] rounded-bl-3xl rounded-br-3xl ">
          
            <div  className="p-2 flex flex-row gap-3 ">
                <h1 className="text-xl text-green-500">My Terminal:~$ </h1>
                <h1 className="text-xl text-white ">cat about.txt</h1>
            </div>
            <div className="p-2 flex flex-col  gap-2 ">
                <h1 className="text-xl text-white flex flex-col gap-1">
                      Hello I'm Adeshkumar S N .I'm Software Developer . I have studied Information Science at K.L.E Institute of Technology"            
                </h1>
                <h1 className="text-xl text-white flex flex-col gap-1">
                I continuously seek opportunities to expand my skill set and apply my knowledge to achieve personal growth and contribute to organizational goals.
                </h1 >
                <h1 className="text-xl text-white flex flex-col gap-1">
                     Work experiences in Smart MedTech. Let's collaborate and create remarkable web experiences together !
                </h1>  
            </div>
            <div  className="p-2 flex flex-row gap-3 ">
                <h1 className="text-xl text-green-500">My Terminal:~$ </h1>
            </div>
        </div>
    </div>   
    )
} 

export default TerminalData