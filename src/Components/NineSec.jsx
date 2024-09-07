import {v4 as uuid} from "uuid";
function NineSec() {
const nineSecCardsData=
    [
        {
            text:"Become a Volunteer",
            color:"bg-MediamGray"
        },
        {
            text:"Donate Blood",
            color:"bg-MediamOrange"
        },
        {
            text:"Become A Member",
            color:"bg-PrimaryGrey"
        },
        {
            text:"Find a Red Cross Near you",
            color:"bg-LightOrange"
        },
    ]
  return (
    <section className="flex flex-col lg:flex-row">
      {
        nineSecCardsData.map(item=>{
            return(
                <h3 key={uuid()} className={`px-20 py-10 flex-1 text-2xl text-center font-serif ${item.color}`}>{item.text}</h3>
            )
        })
      }
    </section>
  )
}
export default NineSec;
