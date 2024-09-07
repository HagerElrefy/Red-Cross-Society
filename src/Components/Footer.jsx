function Footer() {
  return (
    <footer>
      <div className="flex flex-col p-10 justify-center items-center gap-16 md:px-20 md:flex-row">
        <img src="images/LOGO.png" alt="logo" className="h-14 w-1/12" />
        <div className="flex flex-wrap justify-between gap-14 w-2/3 bg-LightOrange px-10 py-5">
            <div className="flex flex-col gap-2">
                <h6 className="font-bold mb-2">Contact Information</h6>
                <p>RedCross Marg, Kathmandu</p>
                <p>Phone: +977-1-5370650 , +977-1-537 2761 </p>
                <p>Email: nrcs@nrcs.org, info@nrcs.org</p>
                <p>Post Box No. : 217</p>
                <p>Fax : +977-4271915, 4273285</p>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className="font-bold mb-2">Quick Links</h6>
                <a href="/">About Us</a>
                <a href="/">FAQ's</a>
                <a href="/">What We Do</a>
                <a href="/">Get Involved</a>
                <a href="/">News And Events</a>
                <a href="/">Contact Us</a>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className="font-bold mb-2">Connect With Us</h6>
                <a href="/">YouTube</a>
                <a href="/">Facebook</a>
                <a href="/">Twitter</a>
                <a href="/">Instagram</a>
            </div>
        </div>
      </div>
      <div className="py-2 text-center bg-PrimaryOrange text-white">
            <h4>Copyright 2023. All Rights Reserved by Nepal Red Cross.</h4>
      </div>
    </footer>
  )
}
export default Footer;
