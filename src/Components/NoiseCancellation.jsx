import image from "/images/music-waves.png";
import leftBud from "/images/L.png";
import rightBud from "/images/R.png";

function NoiseCancellation() {
  return (
    <>
      <section>
        <div className="flex justify-between  items-end overflow-hidden">
          <img src={`${leftBud}`} alt="" className="md:max-w-100 max-w-30" data-aos="fade-up" />
          <img src={`${rightBud}`} alt="" className="md:max-w-100 max-w-30" data-aos="fade-up"/>
        </div>
        <div className="m-auto max-w-100 md:mt-30 mt-10" data-aos="fade-in">
          <p className="text-lg text-justify pt-10">
            Choose from three sizes of soft, flexible silicon tips that are
            click into place. Find the best fit-and get the best sound-by using
            the Ear Tip Fit Test.
          </p>
          <p className="text-lg text-justify pt-10">
            These internally tapered tips confirm to your ear shape, keeping
            Airpods Pro secure. And with vents helping equalize pressure, you
            feel like there's nothing in your ears.
          </p>
        </div>
        <div className="md:mt-45 mt-15">
          <div className="text-center">
            <div className="text-xl font-semibold" data-aos="fade-down">Active Noise Cancellation</div>
            <h3 className="md:text-6xl text-3xl font-bold my-5" data-aos="fade-up">
              Sounds That Cut The Noise
            </h3>
          </div>
          <div className="text-lg md:mt-35 mt-15">
            <p className="max-w-90" data-aos="fade-right">
              An Outward-facing microphone detects external sound
            </p>
            <p className="max-w-90 md:ml-auto mt-2 md:mt-0 " data-aos="fade-left">
              AirPods Pro then counter it with equal anti-noise, cancelling the
              external sound before you hear it.
            </p>
          </div>
          <div className="mt-10">
            <img src={`${image}`} alt="" width="100%" data-aos="fade-in" />
            <p className="text-lg text-justify pt-10 max-w-100 m-auto mt-5" data-aos="fade-up">
              An inward-facing microphone listens inside your ear for unwanted
              sound which is also eliminated with anti-noise.
            </p>
          </div>
        </div>
         <h3 className="md:text-6xl text-3xl font-bold my-5 text-center md:mt-45 mt-15" data-aos="fade-down">
             Specifications
            </h3>
      </section>
    </>
  );
}

export default NoiseCancellation;
