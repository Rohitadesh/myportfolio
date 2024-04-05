import { useState } from "react"
import CompanyProject from "./components/companyproject"
import calender from '../../public/calender.jpeg'
import dashboard from '../../public/dashboard.jpeg'
import kss from '../../public/kss.png'
import Login from'../../public/Login.png'
import doctor from'../../public/doctor.png'
// import {Data} from "./data"
// import {personal} from './Personal'
import SingleData    from "./components/SingleData"
const Project = ( ) =>{
        const [Id,setId] = useState(0)
        const [data,setData]=useState(false)
         console.log(Id,"prop id")
         let d =  Data.filter(e=>e.id==Id)
         console.log(d)
         let p = Personal.filter(e=>e.id==Id)
    return(
        <div className=" w-full  flex flex-col justify-center items-center gap-8 ">
            <h1 className="p-2 text-black text-2xl ">Project</h1>
           {/* <div className="flex flex-col  justify-center   justify-center items-center border border-black gap-12 py-6"> */}
                <div className="grid grid-cols-3 flex gap-6 max-sm:grid-cols-1 max-sm:grid-row-3"  onClick={()=>setData(true)}>
                {
                        Data.map((e,i)=>{
                    
                            return(
                                <CompanyProject  key={i} title={e.title} tools={e.tools} description={e.short}  setId={setId} dataId={e.id} />
                    
                            )
                        })
                    }
                </div>
            <h1 className="p-2 text-black text-2xl ">Hobby Project</h1>
                <div className="grid grid-cols-3 flex gap-12 py-6  md:max-lg:gap-4  max-sm:grid-cols-1 max-sm:grid-row-3" onClick={()=>setData(true)}>
                {
                        Personal.map((e,i)=>{
                    
                            return(
                                <CompanyProject  key={i} title={e.title} tools={e.data} description={e.short}  setId={setId} dataId={e.id} />
                    
                            )
                        })
                    }
                </div>
       
            {/* </div>  */}
          {
                data  && Id && 
                <div className="absolute top-0 left-0 right-0 bottom-0 ">
                    <SingleData data={d} setState={setData}  />
                </div>
          }

          {
                data  && Id && 
                <div className="absolute top-0 left-0 right-0 bottom-0 ">
                    <SingleData data={p} setState={setData}  />
                </div>
          }
    
        </div>
    )
}

 const Data =[{
    id:1,
    title:'MyBioBackup',
    tools:["ReactJs","Mysql","ExpressJS" ,"TailWindCss"],
    short:"This is Our Client Product . This Product is based on storing the medical documents . This software feature such as scan reports , prescription and Lab reports and we can search doctor and scanCenter ... ",
    Description:"This is Our Client Product . This Product is based on storing the medical documents . This software feature such as scan reports , prescription and Lab reports and we can search doctor and scanCenter  .There is special feature called Medicine reminder u can store many number of days and messages will be alerted. My role was ReactJS  , Mysql ,ExpressJS      AWS , Tailwindcss",
    gallery:[calender.src,dashboard.src],
    toolsDescription:"Aws:-EC2,RDS,CICD:-github action",
    // heights:'15%',
    // widths:'15%',
    height:150,
    width:150
},
{
    id:2,
    title:'Ayuci',
    tools:['Material UI','css','Go Language ','MYSQl'],
    gallery:[Login,doctor],
    short:'This is Our Client Produce.This Product is based on Hospital Managament System and its a paperless documentation IPD , Wards , OPD , billing , Appointment Booking and Appointment Scheduling etc ...',
    Description:'"This is Our Client Produce.This Product is based on Hospital Managament System and its a paperless documentation . This Software feature such as IPD,Wards,OPD,billing,Appointment Booking,Appointment Scheduling etc. My role was in frontend developer"',
    toolsDescription:"Material UI Template and useReactHookForms",
    height:650,
    width:650
},
{   id:3,
    title:'Ksss PU College',
    tools:['ExpressJS','Mysql','ReactJs','Tailwindcss'],
    gallery:[kss],
    short :"This is Our Client Produce . This Product is used for to keep up with the current and updates regarding college data saving student data saving exam and branch wise question paper . My role was in frontend developer ",
    Description:"This is Our Client Produce . This Product is used for to keep up with the current and updates regarding college data . My role was in frontend developer .... ",    
    toolsDescription:'ReactJs,ExpressJS,TailwindCss',
    link:'https://kssscollege.com/',
    height:800,
    width:800
}

]

export const Personal = [{
    id:1,
    data:['React Js','Tailwindcss'],
    title:'Weather app',
    Description: 'This is my project is used to see Present day weather Condition . In This Project Tools are used to ReactJs , Tailwindcss and Open source Weather api .',
    short:'This is my project is used to see Present day weather Condition . In This Project Tools are used to ReactJs , Tailwindcss and Open source Weather api ...'
},
{
    id:2,
    data:['HTML','CSS','Javascript'],
    title:'Rock paper sizer game',
    Description:'This is Game which contain user and computer the three button contains stone paper cutter click any one of these  button from userside and which computer accept user challenge it plays on it .',
    short:'This is Game which contain user and computer the three button contains stone paper cutter click any one of these  button from userside and which computer accept user challenge it plays on it .'
},

{
    id:3,
    data:['Nodejs','Mysql','ReactJs','TailwindCss'],
    title:'Quiz',
    Description:'This is my fullstack project which use to conduct exams in schools and colleges at end of examination students will get immediately result but this project presently in progress.',
    short:'This is my fullstack project which use to conduct exams in schools and colleges at end of examination students will get immediately result ...  project is presently in progreess'
},
 {
    id:4,
    data:['React Js','Tailwind Css'],
    title:'custom table component',
   Description:'This is my Custom Component Where from backend we can store data direct to this component.In This component can filter out the data and their is search the data from the table .' ,
   short:'This is my Custom Component Where from backend we can store data direct to this component.In This component we can filter out the data and we can search the data from the table...' 
 },
 {
    id:5,
    data:['React Js','Tailwind css'],
    title:'React FAQ',
    Description:'This is My First react project FAQ which has Some Static data Question and Answer .But is sample and learning purpose .',
    short:'This is My First react project FAQ which has Some Static data Question and Answer .But is sample and learning purpose ...'
 } ,
 {
    id:5,
    data:['React Js','Tailwind css'],
    title:'Stop Watch',
    Description:'This is  react project Stop Watch which has buttons to track seconds , hour , minutes . Project Features is Stop , Start and Reset .',
    short:'This is  react project Stop Watch which has buttons to track seconds , hour , minutes . Project Features is Stop , Start and Reset ...'
 } 

] 


export default Project