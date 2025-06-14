import chargingBg from "/images/charging.png"
function Charging() {
  return (
    <>
      <div className="text-black py-1 h-screen rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${chargingBg})` }}>
        <h3 className="md:text-6xl text-3xl font-bold text-center mt-4" data-aos="fade-in">
          Use tirelessly
        </h3>
      </div>
    </>
  );
}

export default Charging;
