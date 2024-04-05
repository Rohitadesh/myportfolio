import { IoCloseCircle } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";


const TerminalSkills = () =>{
    
    return(
        <div className="h-[70%] w-[60%] shadow-md   ">
        <div className="h-[3rem] w-full  grid grid-cols-12 bg-[#222222] rounded-tl-2xl rounded-tr-2xl ">
            <div className="rounded-md p-2  h-full w-full ">
               <p className="border border-black">
                    
               </p>
            </div>
            <div className="rounded-md col-span-8 h-full w-full   flex flex-col justify-center items-center">
                <h1 className="text-xl text-white">lenovo@lenovo-IdeaPad-212H56:/~</h1>
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
                <h1 className="text-xl text-green-500">lenovo@lenovo-IdeaPad-212H56:~$ </h1>
                <h1 className="text-xl text-white ">cat Skills.txt</h1>
            </div>
            <div className="p-2 flex flex-col  gap-2 ">
                <h1 className="text-xl text-white flex flex-col gap-1">
                    Web Technolog:- Html, Css, Javascript          
                </h1>
                <h1 className="text-xl text-white flex flex-col gap-1">
                    Librires/FrameWork:-ExpressJS, ReactJS, TailwindCss .
                </h1 >
                <h1 className="text-xl text-white ">
                      Tools:MYSQL, AWS, GitHub
                </h1>  
                <h1 className="text-xl text-white pl-3">
                        AWS:  EC2,S3-bucket, Docker ,ElasticBeanStalk,Route53,App-runner          
                </h1>
            </div>
            <div  className=" flex flex-row gap-1  ">
                <h1 className="text-xl text-green-500">lenovo@lenovo-IdeaPad-212H56:~$ </h1>
                <h1 className="border border-black bg-white w-3 h-6"></h1>
            </div>
        </div>
    </div>   
    )
} 

export default TerminalSkills