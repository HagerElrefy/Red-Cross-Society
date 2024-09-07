function ThirdSec() {
    const CardsData = [
        {
            Head:"Our Mission",
            explain:"Elementum nec posuere auctor varius. Vehicula nec faucibus orci eget odio tortor in pharetra ultrices. Diam varius vitae placerat vitae quis mauris cras senectus tempus.",
            action:"Take A Pledge!",
            btnName:"Support Us"
        },
        {
            Head:"Objectives & Functions",
            explain:"Elementum nec posuere auctor varius. Vehicula nec faucibus orci eget odio tortor in pharetra ultrices. Diam varius vitae placerat vitae quis mauris cras senectus tempus.",
            action:"Photos & Videos",
            btnName:"Go To Gallery"
        }
    ]
  return (
    <section>
      {CardsData.map((data,index)=>{
        return(
            <div key={index} className="w-screen flex flex-col text-center md:flex-row">
                <div className={`${index % 2 === 0 ? ' bg-MediamGray' : 'bg-PrimaryGrey'} w-full flex flex-col py-10 px-10 gap-3 md:px-40 md:w-2/3`}>
                    <h4 className="text-xl font-bold font-serif">{data.Head}</h4>
                    <p className="text-sm">{data.explain}</p>
                    <a href="/" className="text-PrimaryOrange">Read More</a>
                </div>
                <div className={`${index % 2 === 0 ? '  bg-MediamOrange' : 'bg-LightOrange'} w-full flex flex-col py-10 px-10 gap-3 md:px-20 md:w-1/3 lg:px-40`}>
                    <h4 className="text-2xl font-bold font-serif">{data.action}</h4>
                    <button className="px-3 py-1 bg-none border border-PrimaryOrange">{data.btnName}</button>
                </div>
            </div>
        )
      })}
    </section>
  )
}
export default ThirdSec;