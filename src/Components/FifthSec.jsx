import BaseBtn from "./BaseBtn";
import SecHead from "./SecHead";
import { v4 as uuid } from 'uuid';

function Card({data}) {
  return(
    <div className="flex justify-between items-center gap-10 py-5 border-b-2">
      <h5 className="p-3 text-center bg-MediamGray ">{data.date}</h5>
      <div className="flex flex-col gap-2">
        <h6 className="font-bold">{data.head}</h6>
        <p className="text-sm font-thin">{data.text}</p>
      </div>

    </div>
  )
}

function FifthSec() {
  const cardsData=[
    {
      date:"29 July",
      head:"Education for under priviledged",
      text:" Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit..."
    },
    {
      date:"11 Feb",
      head:"Lorem ipsum dolor sit amet consectetur.",
      text:" Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit..."
    },
    {
      date:"29 July",
      head:"Et faucibus consectetur proin leo neque bibendum.",
      text:" Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit..."
    }
  ]
  return (
    <section className='relative'>
      <div className="flex flex-col justify-between items-center py-10 px-10 gap-3 bg-LightOrange md:flex-row md:gap-36 md:px-40">
      <div className="flex flex-col justify-between gap-4 flex-1">
        <SecHead headName="News & Events"/>
        <h3 className="font-bold text-3xl font-serif">Read about us & events we've organized</h3>
        <div className="w-3/4 h-fit relative">
          <img src="images/volunteers.png" alt="volunteers" className="w-full h-1/2" />
          <h5 className="p-3 text-center font-bold w-1/6 bg-MediamOrange absolute top-0 left-0">30th July</h5>
        </div>
        <h6 className="font-bold text-lg">Volunteer loses hope, Continues to help</h6>
        <p>Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
        <a href="/" className="text-PrimaryOrange font-bold text-lg">Read This</a>
      </div>
      <div className="flex flex-col justify-between gap-4 flex-1">
        <div className="self-end">
          <BaseBtn btnName="More News"/>
        </div>
        <div>
        {cardsData.map(item=>{
          return(
            <Card key={uuid()} data={item}/>
          )
        })}
        </div>
      </div>
      </div>
      <div className="z-10">
        <img src="images/circle.png" alt="circle-victor" className="absolute -right-28 w-1/6 h-1w-1/6 -top-24"/> 
        <img src="images/circle-blur.png" alt="circle-victor" className="absolute -right-24 w-1/6 h-1w-1/6 -top-28"/> 
        <img src="images/Icons.png" alt="icon" className="absolute right-16 w-10 h-10 -top-3"/>
      </div>
    </section>
  )
}
export default FifthSec;
