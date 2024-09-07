import BaseBtn from "./BaseBtn";

function FirstSec() {
  return (
    <section className="relative overflow-hidden">
      <img src="images/Background.png" className="w-full h-[80vh] object-cover z-0" alt="background-image" />
      <div className="after:content-[''] after:w-2/3 after:bg-PrimaryOrange after:blur-lg after:opacity-20 after:h-full after:absolute after:top-0 after:-left-44 after:-skew-x-25 after:z-0"></div>
      <div className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white flex flex-col items-center gap-2 md:gap-5">
        <p className="md:font-bold">Unite, Serve, Strengthen Together</p>
        <h1 className="font-bold text-lg md:text-4xl">Serving Humanity, Saving Lives Red Cross Society</h1>
        <p className="text-xs md:text-sm">Compassion drives us. Together, we serve, uplift, and strengthen communities. Join us in making a difference, one act of kindness at a time.</p>
        <BaseBtn btnName="Donate Now"/>
        </div>
    </section>
  );
}

export default FirstSec;
