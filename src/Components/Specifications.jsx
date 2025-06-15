import topImage from "/images/Layer 3.png";
import line from "/images/Line 1.png";
import h1Chip from "/images/Layer 4.png";
import whiteLine from "/images/white-line.png";
import bassImage from "/images/Ellipse 1.png";
function Specifications() {
  return (
    <>
      <div className="bg-[var(--accentGray)] text-black rounded-lg relative overflow-visible">
        <section className="relative overflow-visible">
          <div className="flex  justify-center items-end flex-col md:flex-row relative overflow-visible">
            <div className="flex justify-center  items-center gap-10 relative overflow-visible">
              <img
                src={`${topImage}`}
                alt=""
                className="md:max-w-60 max-w-30 z-10 md:-translate-y-[7.5rem] -translate-y-[5rem]"
                data-aos="fade-up"
              />

              <p className="text-lg text-justify md:max-w-100 indent-5" data-aos="fade-up">
                The amplifire powers the speaker driver to remove background
                noise works with th H1 chip to control listening levels.
              </p>
            </div>
            <p className="text-lg text-justify max-w-100 indent-5 mt-10 md:mt-0" data-aos="fade-up">
              A super-efficifient high dynamic range amplifire produces pure,
              increadibly clear sound while also extending battery life.
            </p>
          </div>
          <div className="md:mt-20 mt-10">
            <p className="text-lg  text-justify max-w-100 m-auto indent-5" data-aos="fade-down">
              The Appl-designed H1 chip employs 10 audio cores, creating
              increadbly low audio processing latency that enable real-time
              noise cancellation.
            </p>
            <img
              src={`${line}`}
              alt=""
              className="m-auto mt-7 translate-x-17 max-w-5 md:max-w-none"
              data-aos="fade-in"
            />
            <img
              src={`${h1Chip}`}
              alt=""
              className="m-auto md:max-w-100 max-w-50 md:translate-y-[6rem] translate-y-[8rem] -mt-30"
              data-aos="fade-up"
            />
          </div>
        </section>
      </div>
      <div>
        <section className="mt-20 pb-0">
          <div>
            <p className="text-lg  text-justify max-w-100 indent-5" data-aos="fade-in">
              Powerfull bass is delivered by a custom-built high-excurasion,
              low-distortion speaker driver.
            </p>
            <img
              src={`${whiteLine}`}
              alt=""
              className="m-auto md:-translate-x-47 -translate-x-10 mt-5 md:max-w-30 max-w-10"
              data-aos="fade-in"
            />
          </div>
          <div>
            <img src={`${bassImage}`} alt="" className="md:max-w-150 max-w-70 m-auto" data-aos="fade-in"/>
          </div>
          <div className="md:-mt-58 -mt-10">
            <img
              src={`${whiteLine}`}
              alt=""
              className="m-auto md:translate-x-37 -translate-x-10 md:max-w-30 max-w-10"
              data-aos="fade-in"
            />
            <p className="text-lg text-justify max-w-100 indent-5 ml-auto mt-3" data-aos="fade-in">
              Powerfull bass is delivered by a custom-built high-excurasion,
              low-distortion speaker driver.
            </p>
          </div>
          <div className="md:mt-60 mt-15 text-center">
            <div className="text-xl font-semibold" data-aos="fade-down">Battery</div>
            <h3 className="md:text-6xl text-3xl font-bold text-center mt-4" data-aos="fade-up">
              Charge wirelessly
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default Specifications;
