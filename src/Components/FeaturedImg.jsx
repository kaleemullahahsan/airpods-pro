import image from "/images/featured.png";
import leftBud from "/images/left.png";
import rightBud from "/images/right.png";
function FeaturedImg() {
  return (
    <section className="flex justify-center items-center flex-col md:gap-20 gap-10 my-15 overflow-hidden">
      <h2 className="md:text-7xl text-5xl font-bold" data-aos="fade-down">Magic like you've never heard</h2>
      <img src={`${image}`} alt="" className="max-w-100 md:max-w-200" data-aos="fade-in" />
      <h2 className="md:text-7xl text-5xl font-bold" data-aos="fade-up">Comfort</h2>
      <div className="flex justify-center  items-end">
        <img src={`${leftBud}`} alt="" className="md:max-w-100 max-w-0" data-aos="fade-right"/>
        <p className="md:text-lg text-justify " data-aos="fade-up">
          We have redesign the ergonomics of comfort, resulting in a new
          category of in-ear headphones with an amazing seal for active noise
          cancellation. You won't just hear music; you'll also feel it.
        </p>
        <img src={`${rightBud}`} alt="" className="md:max-w-100 max-w-0" data-aos="fade-left"/>
      </div>
    </section>
  );
}

export default FeaturedImg;
