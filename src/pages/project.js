import { useState } from "react"
import CompanyProject from "./components/companyproject"
import calender from '../../public/calender.jpeg'
import dashboard from '../../public/dashboard.jpeg'
import kss from '../../public/kss.png'
import Login from'../../public/Login.png'
import doctor from'../../public/doctor.png'
import start from '../../public/start.png'
import stopwatch from'../../public/stopwatch.png'
import faq from '../../public/faq.png'
import faq1 from'../../public/faq1.png'
import weather from'../../public/weather.png'
import weather1 from'../../public/weather1.png'
import tip from '../../public/tip.png'
import tip1 from '../../public/tip1.png'
import rock from '../../public/rock.png'
import rock1 from '../../public/rock1.png'
import fullstack from '../../public/fullstack.png'
// import {Data} from "./data"
// import {personal} from './Personal'
import SingleData    from "./components/SingleData"
const Project = ( ) =>{
        // const [personalId,setPersonalId]=useState(0)
        const [Id,setId] = useState(0)
        const [data,setData]=useState(false)
         console.log(Id,"prop id")
         let d =  Data.filter(e=>e.id==Id)
         console.log(d)
        //  let p = Personal.filter(e=>e.id==personalId)
    return(
        <div className=" w-full  flex flex-col justify-center items-center gap-8 ">
            <h1 className="p-2 text-black text-2xl ">Project</h1>
           {/* <div className="flex flex-col  justify-center   justify-center items-center border border-black gap-12 py-6"> */}
                <div className="grid grid-cols-3 flex gap-6 max-sm:grid-cols-1 max-sm:grid-row-3"  onClick={()=>setData(true)}>
                {
                        Data.slice(0,3).map((e,i)=>{
                    
                            return(
                                <CompanyProject  key={i} title={e.title} tools={e.tools} description={e.short}  setId={setId} dataId={e.id} />
                    
                            )
                        })
                    }
                </div>
            <h1 className="p-2 text-black text-2xl ">Hobby Project</h1>
                <div className="grid grid-cols-3 flex gap-12 py-6  md:max-lg:gap-4  max-sm:grid-cols-1 max-sm:grid-row-3" onClick={()=>setData(true)}>
                {
                        Data.slice(3,9).map((e,i)=>{
                    
                            return(
                                <CompanyProject  key={i} title={e.title} tools={e.data} description={e.short} setId={setId} dataId={e.id} />
                    
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

     
    
        </div>
    )
}

 const Data =[{
    id:1,
    title:'MyBioBackup',
    tools:["ReactJs","Mysql","ExpressJS" ,"TailWindCss","AWS"],
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
    tools:['Material UI','css','Go Language ','MYSQl','AWS'],
    gallery:[Login,doctor],
    short:'This is Our Client Produce.This Product is based on Hospital ERP and its a paperless documentation IPD , Wards , OPD , billing , Appointment Booking and Appointment Scheduling etc ...',
    Description:'"This is Our Client Produce.This Product is based on Hospital ERP and its a paperless documentation . This Software feature such as IPD,Wards,OPD,billing,Appointment Booking,Appointment Scheduling etc. My role was in frontend developer and AWS "',
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
},
{
    id:4,
    data:['React Js','Tailwindcss'],
    title:'Weather app',
    Description: 'This is my project is used to see Present day weather Condition . In This Project Tools are used to ReactJs , Tailwindcss and Open source Weather api .',
    short:'This is my project is used to see Present day weather Condition . In This Project Tools are used to ReactJs , Tailwindcss and Open source Weather api ...'
    ,gallery:[weather,weather1],
    height:650,
    width:650
},
{
    id:5,
    data:['HTML','CSS','Javascript'],
    title:'Rock paper sizer game',
    Description:'This is Game which contain user and computer the three button contains stone paper cutter click any one of these  button from userside and which computer accept user challenge it plays on it .',
    short:'This is Game which contain user and computer the three button contains stone paper cutter click any one of these  button from userside and which computer accept user challenge it plays on it .'
    ,gallery:[rock,rock1],
    height:650,
    width:650
},

{
    id:6,
    data:['Nodejs','Mysql','ReactJs','TailwindCss'],
    title:'Quiz',
    Description:'This is my fullstack project which use to conduct exams in schools and colleges at end of examination students will get immediately result but this project presently in progress.',
    short:'This is my fullstack project which use to conduct exams in schools and colleges at end of examination students will get immediately result ...  project is presently in progreess'
    ,gallery:[fullstack],
    height:650,
    width:650
},
 {
    id:7,
    data:['HTML','CSS','Javascript'],
    title:'Tip Calculator',
   Description:'This is my frontend project in this project we can calculate the tip how many percentage and how many people with total amount .' ,
  short:'This is my frontend project in this project we can calculate the tip how many percentage and how many people with total amount ...' 
  ,gallery:[tip,tip1],
  height:650,
    width:650
 
},
 {
    id:8,
    data:['React Js','Tailwind css'],
    title:'React FAQ',
    Description:'This is My First react project FAQ which has Some Static data Question and Answer .But is sample and learning purpose .',
    short:'This is My First react project FAQ which has Some Static data Question and Answer .But is sample and learning purpose ...',
    gallery:[faq,faq1],
    height:650,
    width:650
} ,
 {
    id:9,
    data:['React Js','Tailwind css'],
    title:'Stop Watch',
    Description:'This is  react project Stop Watch which has buttons to track seconds , hour , minutes . Project Features is Stop , Start and Reset .',
    short:'This is  react project Stop Watch which has buttons to track seconds , hour , minutes . Project Features is Stop , Start and Reset ...',
    gallery:[stopwatch,start],
    height:650,
    width:650
 } 


]




export default Project