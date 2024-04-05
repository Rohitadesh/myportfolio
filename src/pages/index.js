import Image from "next/image";
import { Inter } from "next/font/google";
// import avbar from "./components/navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import tailwind from'../../public/tailwind.png'
const inter = Inter({ subsets: ["latin"] });
import { FcCallback } from "react-icons/fc";
export default function Home() {
  return (
    <main className="h-[36.7rem] w-full   flex flex-col justify-center items-center">
        <div className="max-sm:h-[30rem] max-sm:py-2 grid  grid-cols-2  h-[60%]   max-sm:grid-rows-2 max-sm:grid-cols-1 glass w-[45rem] border border-orange-500 max-[640px]:w-[90%]">
        <div className="h-full w-full  min-sm:col-span-1 max-sm:row-span-1">
          {/* <Image src={} alt="data" />  */}
          
        </div>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-4 flex-col  min-sm:col-span-1  max-sm:row-span-1">
          <h1 className="text-black lg:text-2xl max-[640px]:text-xl hover:animate-bounce">
            Hi,I'm Adeshkumar S N  🤚
          </h1>

          <h1 className="text-black lg:text-2xl  max-[640px]:text-xl  hover:animate-bounce">
            I Am Software Developer
          </h1>
          
          <div className="flex flex-row  justify-center item-center gap-4">
            <h1 className="lg:text-4xl  max-[640px]:text-2xl  hover:animate-bounce">
              📧 

            </h1>
            <h1 className="text-4xl hover:animate-bounce  max-[640px]:text-2xl ">
              <FaGithub />
            </h1>
            <h1 className="lg:text-4xl hover:animate-bounce  max-[640px]:text-2xl ">
              <FaLinkedin />
            </h1>
            <h1 className="lg:text-4xl hover:animate-bounce  max-[640px]:text-2xl" >
              <FcCallback /> 
            </h1>
            
            
          </div>
        </div>
      </div>
        
    </main>
  );
}
