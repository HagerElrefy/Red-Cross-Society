import BaseBtn from "./BaseBtn";
import ImageWithFrame from "./ImageWithFrame";
import SecHead from "./SecHead";

function SecondSec() {
    return (
      <section className='flex flex-col justify-between items-center py-10 px-10 gap-5 md:flex-row md:gap-40 md:px-40'>
        <div className="relative flex-1 w-full h-2/3 md:w-1/4">
        <ImageWithFrame path={"images/children.png"}/>
          <img src="images/circle.png" alt="circle-victor" className="absolute -left-14 w-1/2 h-1/2 -z-10 -top-5"/> 
          <img src="images/circle-blur.png" alt="circle-victor" className="absolute -left-16 w-1/2 h-1/2 -z-10 -top-6"/> 
          <img src="images/vector.png" alt="hand-vector" className="absolute -left-10 w-7 h-7 -z-10 bottom-5"/>
        </div>
        <div className="flex flex-1 flex-col gap-2 ">
            <SecHead headName="about us"/>
            <h3 className="font-bold text-3xl font-serif">Your Support is Really Powerful.</h3>
            <p className="text-sm">The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
            <BaseBtn btnName="READ MORE"/>
        </div>
      </section>
    );
  }
  export default SecondSec;