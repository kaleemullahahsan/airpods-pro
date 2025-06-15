import logo from "/images/Layer 1.png";
import facebook from "/images/facebook.png";
import x from "/images/x.png";
import linkedIn from "/images/linkedIn.png";
import instagram from "/images/instagram.png";

function Footer() {
  return (
    <>
      <section className="flex items-center justify-between gap-10">
        <div className="w-50 hidden md:block">
          <a href="#">
            <img src={`${logo}`} alt="" className="md:max-w-10 max-w-5" />
          </a>
        </div>
        <span className="whitespace-nowrap">
          Website By <a href="#">Ahsan</a>
        </span>
        <div className="flex items-center gap-3 justify-end">
          <a href="#" className="bg-white rounded-full p-2">
            <img
              src={`${facebook}`}
              alt=""
              className="md:max-w-120 w-5 object-bottom"
            />
          </a>
          <a href="#" className="bg-white rounded-full p-2">
            <img src={`${x}`} alt="" className="md:max-w-120 w-5 object-bottom" />
          </a>
          <a href="#" className="bg-white rounded-full p-2">
            <img
              src={`${linkedIn}`}
              alt=""
              className="md:max-w-120 w-5 object-bottom"
            />
          </a>
          <a href="#" className="bg-white rounded-full p-2">
            <img
              src={`${instagram}`}
              alt=""
              className="md:max-w-120 w-5 object-bottom"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
