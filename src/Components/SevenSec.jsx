function Comment() {
    return (
        <div className="flex items-center self-start gap-2">
            <img src="images/person.png" alt="person" className="w-1/2 h-1/2 rounded-full"/>
            <div className="flex flex-col gap-2">
                <h6 className="font-bold">Mr. John Doe</h6>
                <h6 className="text-PrimaryOrange">Designation</h6>
                <p>Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
            </div>
        </div>
    )
}
function SevenSec() {
  return (
    <section className="bg-LightOrange py-10" >
        <h3 className="text-center text-3xl font-bold font-serif">Hear From Us</h3>
        <div className="flex flex-col pt-5 items-center px-10 lg:flex-row lg:px-40">
                <Comment/>
                <span className="hidden h-52 border-l-2 lg:flex"></span>
                <Comment/>

        </div>
    </section>
  )
}
export default SevenSec;
