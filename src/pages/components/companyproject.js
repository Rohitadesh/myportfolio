import { useState } from "react";

const CompanyProject  = ({title,dataId,tools,description,setId}) =>{
        // console.log(dataId)
        // // const tool =
        console.log(tools)
        // console.log(Id)
    return(
        <>
        
       <div   className="h-[16rem] glass w-[25rem]   shadow-xl  
                    sm:max-lg:w-[14rem]  sm:max-lg:h-[23rem] max-sm:h-[23rem] max-sm:w-[20rem]
                        " onClick={(e)=>setId(e.target.id)} >
                <div   className="w-full   h-[12rem] sm:max-lg:h-[14rem] flex flex-col justify-center items-center gap-6
                 sm:max-lg:flex-col sm:max-lg:gap-4 sm:max-lg:justify-start max-sm:p-1 max-sm:h-[15rem] " >
                <h1 className="text-black text-md  sm:max-lg:p-4   text-center ">{title}</h1>
                    <h1 id={dataId} className="h-24 w-full text-black text-md text-clip  sm:max-lg:text-sm  text-center">{description}</h1>
                </div>
                <div className="h-[4rem] w-full rounded-md  sm:max-lg:h-[9rem] sm:max-lg:p-2 max-sm:h-[8rem]
               flex flex-row flex-wrap justify-center items-center gap-2">
                    {
                    tools &&  tools.map((e,i)=>{
                            return(
                                <button key={i} className="p-2 text-black rounded-md border border-gray-300   ">{e}</button>  
                            )
                        })
                    }
                </div>    
            </div>

    
              
           

            

        </>
    )
}

export default CompanyProject;