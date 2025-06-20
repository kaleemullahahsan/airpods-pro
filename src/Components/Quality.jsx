import image from '/images/sideImg.png'
function Quality() {
  return (
    <>
      <div className="bg-[var(--accentGray)] text-black rounded-lg md:my-45 my-15 overflow-hidden" >
        <section className='p-0 flex justify-center items-center relative m-auto'>
            <div className='absolute left-5 w-[50%] z-10' data-aos="fade-right">
              <span className='md:text-xl text-md font-semibold'>Audio Quality</span>
              <h3 className='md:text-6xl text-2xl font-bold md:my-5 my-2 '>Everything you hear is unheard of</h3>
            </div>
            <div>
                <img src={`${image}`} className='h-[300px] md:h-auto object-bottom object-cover'  alt="" data-aos="fade-in"/>
            </div>
        </section>
      </div>
    </>
  );
}

export default Quality;
