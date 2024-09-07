import BaseBtn from "./BaseBtn";
import { v4 as uuid } from 'uuid';
import ImageWithFrame from "./ImageWithFrame";
function VectorWithText({ vecPath, text }) {
    return (
        <div className="flex items-center gap-5">
            <img src={vecPath} alt="text-vector" className="w-10 h-10" />
            <p>{text}</p>
        </div>
    )
}

function FourthSec() {
    const pathesAndTexts = [
        {
            path: 'images/vector-1.png',
            txt: 'The secret to happiness lies in helping others.Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.'
        },
        {
            path: 'images/vector-2.png',
            txt: 'The secret to happiness lies in helping others.Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.'
        }

    ]
    return (
        <section className="flex flex-col justify-between items-center py-10 px-10 gap-5 lg:flex-row lg:gap-40 lg:px-40">
            <div className="flex-1">
                <h3 className="text-3xl font-bold font-serif">How we're making a difference</h3>
                <div className="flex flex-col gap-5 py-5 text-sm font-thin">
                    <p>Consectetur curabitur quis vitae aliquet nulla habitasse feugiat sed tellus. Vulputate ut elit sed laoreet amet phasellus pulvinar pretium. Nunc dictum quisque lobortis vulputate gravida imperdiet libero at ac.</p>
                    {pathesAndTexts.map((data) => {
                        return (
                            <VectorWithText key={uuid()} vecPath={data.path} text={data.txt} />
                        )
                    })
                    }
                    <p> Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit.</p>
                </div>
                <BaseBtn btnName='Learn More' />
            </div>
            <div className="relative flex-1">
                <div className="h-2/3 pt-32" >
                    <ImageWithFrame path={"images/ambulances.png"}/>
                    <img src="images/image.png" className="hidden w-1/3 h-1/3 border-4 top-1 right-0 border-MediamOrange absolute md:w-2/4 lg:block" alt="treat" />
                    <img src="images/vector-work.png" alt="vector" className="hidden absolute w-1/3 h-1/3 top-8 left-28 -z-10 lg:block"/>
                </div>
            </div>
        </section>
    )
}
export default FourthSec;
