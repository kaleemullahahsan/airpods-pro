function Hero() {
  return (
    <section data-aos="fade-up" className=" h-screen mt-10 bg-size-[200px] md:bg-size-[400px] w-screen bg-center  bg-no-repeat flex justify-center  items-end"
      style={{ backgroundImage: `url(/images/tinywow_1_2_4254356 2.png)` }}>
      <div className="z-10 text-center flex justify-end items-center flex-col md:gap-20 gap-10" data-aos="fade-up">
        <h2 className="md:text-9xl text-6xl font-bold mt-0 ">AirPods Pro</h2>
        <div className="flex items-center gap-10 z-10">
          <a href="#">Learn more</a>
          <a
            href="#"
            className="border-2 py-2 px-10 rounded-xl border-[var(--accentGray)]"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
