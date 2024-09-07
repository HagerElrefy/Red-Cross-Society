import { FaPlay } from "react-icons/fa6";

function Radio() {
    return(
        <div className="flex items-center gap-5">
            <h5 className="p-3 text-center flex flex-col bg-MediamGray"><span>30</span><span>July</span></h5>
            <div className="flex flex-col gap-2">
                <h6 className="font-bold">Episode 676_Red Cross Radio</h6>
                <h6>Monsoon Response </h6>
                <div className="flex items-center gap-2">
                    <FaPlay/>
                    <span className="w-2/3 border-b-2"></span>
                    <p className="font-thin text-xs">00:00/11:29</p>
                </div>
                </div>
        </div>
    )
}
function EightSec() {
  return (
    <section className="py-10">
        <div className="flex flex-col gap-5 items-center">
            <h3 className="font-bold text-3xl font-serif">we also have a radio program</h3>
            <div className="flex flex-col border border-MediamOrange md:flex-row">
                <h6 className="py-2 px-10">Tuesday Program</h6>
                <h6 className="bg-MediamOrange py-2 px-10">Together for Humanity</h6>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-28 px-10 md:px-40">
                <Radio/>
                <Radio/>
                <Radio/>
                <Radio/>
            </div>
        </div>
    </section>
  )
}
export default EightSec;
