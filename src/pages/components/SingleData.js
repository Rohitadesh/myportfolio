// import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
const SingleData = ({setState,data,height,width}) =>{
    // console.log(data[0].Description)
    





    return(
        <>
         { data &&

            <div className="h-screen w-screen   flex flex-col justify-center items-center
            bg-black/50">
                <div className='rounded-full h-8 w-8   right-[17%]  absolute  z-[200] top-[18%] bg-white opacity-80
                max-sm:relative max-sm:top-[2rem]    max-sm:left-[10.2rem]     max-sm:
                sm:max-lg:top-[1rem] sm:max-lg:left-[22rem]  sm:max-lg:relative flex justify-center items-center' onClick={()=>setState(false)}>
                    <IoMdClose />
                </div>
                <div className='h-[60%] w-[65%]  bg-white     rounded-tr-none  rounded-md grid grid-cols-2 overflow-auto  
                sm:max-lg:w-[38rem] sm:max-lg:h-[25rem] 
                max-sm:grid-cols-1 max-sm:grid-rows-5 max-sm:h-[45rem] max-sm:w-[23rem] '>
                    <div className='h-full w-full  flex justify-center items-center flex-wrap gap-1 
                  max-sm:row-span-3
                    '>
                        { data && data[0].gallery.map((e,i)=>{
    
                            return(
                                <Image src={e} height={data[0].height} width={data[0].width} alt={i}  />
                            )
                        })}
                    </div>
                    <div className='h-full w-full p-2 flex justify-start items-center max-sm:row-span-2'>
                        <h1 className='text-black text-center text-md sm:max-lg:text-sm'>
                            {data[0].Description}
                        </h1>
                    </div> 
    
                </div>
            </div>


        }
        </>

    )
}


export default SingleData;