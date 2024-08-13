// import MenuBar from "./menu"/
import Image from "next/image"
import Link from "next/link"
import code from "../../../public/code.png"
import { useState } from "react"
const Navbar = ({children}) =>{
    const [state,seState]=useState()
    const navBar=[{place:"Home",path:"/"},{place:"About Me",path:"/Aboutme"},{place:"Project",path:"/project"}]
    // const Link=["Aboutme"]
    const size =[16,12,8,4]
    return(
        <div className="overflow-auto h-screen w-screen ">
            <div className="max-[640px]:w-full max-sm:h-[6rem] h-[8rem] sm:w-full w-full flex flex-col justify-center items-center">
                <div className="  max-[640px]:w-[90%] max-[640px]:h-[60%] lg:w-[30%] bg-[#426369] grid grid-cols-3  glass rounded-md  lg:h-[50%] 
                sm:max-lg:w-[24rem] sm:max-lg:h-[4rem] "> 
                    <div className="h-full w-full  flex  flex-col justify-center items-center">
                        <Link href={navBar[1].path} className="text-black after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[4.5rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{navBar[1].place}</Link>
                    </div>
                    <div className="h-full  w-full flex  flex-col justify-center items-center">
                    <Link href={navBar[0].path} className="text-black after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[3rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{navBar[0].place}</Link>
                    </div>
                    <div className="h-full w-full  flex  flex-col justify-center items-center">
                    <Link href={navBar[2].path} className="text-black after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-[3.5rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{navBar[2].place}</Link>
                    </div>
                </div> 

            </div>
            
                {children}
        </div>


    )
}


export default Navbar