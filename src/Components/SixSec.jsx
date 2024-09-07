import BaseBtn from "./BaseBtn";
import SecHead from "./SecHead";
import {v4 as uuid} from "uuid";
function Points({points}){
    return <h5 className={`${points>11 ? "bg-MediamOrange" : " bg-MediamGray"} p-5`}>{points} {points>11? " pint" : " pints"}</h5>
}
function Grade({gradeOfBlood}) {
    return     <h6 className="p-5">{gradeOfBlood}</h6>

}
function SixSec() {
    const sixSecCardsData=[
        {
            point:0,
            grade:"A+"
        },
        {
            point:70,
            grade:"A-"
        },
        {
            point:70,
            grade:"B+"
        },
        {
            point:70,
            grade:"B-"
        },
        {
            point:29,
            grade:"AB+"
        },
        {
            point:11,
            grade:"AB-"
        },
        {
            point:70,
            grade:"O+"
        },
        {
            point:70,
            grade:"O-"
        },
    ]
  return (
    <section className="flex flex-col justify-between items-center py-10 px-10 md:px-40 gap-5">
      <div className="flex gap-3 justify-between md:gap-36">
        <div className="flex flex-col gap-4 w-1/2">
            <SecHead headName="Blood Bank"/>
            <h3 className="font-bold text-3xl font-serif">The Nepal Red Cross Blood Bank Inventory</h3>
            <p className="font-thin text-sm">These are the currently available number of pints of different blood groups.</p>
        </div>
        <div className="">
            <BaseBtn btnName="Donate Blood"/>
        </div>
      </div>
      <div className="flex gap-3 justify-between lg:flex-col">
        <div className="flex flex-col text-center gap-3 lg:flex-row">
            <h5 className="border border-LightOrange p-5">Pints Available</h5>
            {
            sixSecCardsData.map(item=>{
                return(
                    <Points key={uuid()} points={item.point}/>
                )
            })
            }
        </div>
        <div className="flex flex-col text-center gap-3 lg:gap-10 lg:flex-row">
        <h5 className="border border-LightOrange p-5">Blood Groups</h5>
        {
            sixSecCardsData.map(item=>{
                return(
                    <Grade key={uuid()} gradeOfBlood={item.grade}/>
                )
            })
            }
        </div>
      </div>
    </section>
  )
}
export default SixSec;
