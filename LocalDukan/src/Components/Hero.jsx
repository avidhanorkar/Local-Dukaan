

function Hero() {
  return (
    <>
      <div className="bg-[#FFF7F0] h-[100vh]">
        <div className="flex flex-row pt-[68px] px-[170px] gap-16">
          <div>
            <div className="hero-line text-left pt-[50px] text-gray-900 text-[40px] font-bold">
              Welcome to LocalDukan! <br />
              Empowering Local Businesses!
            </div>
            <div className="subline text-left text-[28px] pb-[40px] text-gray-700">
              We believe in the heartbeat of our neighborhoods—the small, independent shops that add character, warmth, and uniqueness to our communities.<br />
              Choose them over the <span className="text-[#FD650B] underline">Online Retailers</span>
            </div>
          </div>
          <div className="illustrations">
            <img src="./src/assets/shop.jpg" className="h-[400px] w-[800px]" alt="shopkeeper-illustrations" />
          </div>
        </div>
        <div className="button flex gap-[20px] justify-center pb-[50px]">
            <button className="bg-black text-white h-[50px] w-[100px] rounded-lg hover:bg-white hover:border-black hover:border-2 hover:text-black hover:transition-all duration-150 ease-out hover:ease-in">
                Buy Here 
            </button>
            <button className="bg-[#FD6507] text-white h-[50px] w-[100px] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] duration-150 ease-out hover:ease-in hover:transition-all">
              Sell Here
            </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
