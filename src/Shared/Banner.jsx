import car from '../assets/carcover.jpg'
import carone from '../assets/carcover1.jpg'
import cartwo from '../assets/carcover2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${car})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

   <div className='text-white h-full space-y-3 w-full bg-black bg-opacity-80 flex justify-center items-center'>
    <div className='text-center'>
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Your Journey, Our Deals: <br /><span className='text-red-600'>WheelsDeal.</span></h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Discover the best auto deals at WheelsDeal! Drive in style without breaking the bank. Your dream ride is just a click away. Let&lsquo;s hit the road of savings together!</p>
    </div>
   </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${carone})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

  <div className='text-white h-full w-full space-y-3 bg-black bg-opacity-80 flex justify-center items-center'>
    <div className='text-center'>
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Rev Up Your Ride with <br /><span className='text-red-600'>WheelsDeal.</span></h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Revamp your ride, revitalize your budget! Explore WheelsDeal for unbeatable automotive offers. Your ideal vehicle is waiting for you. Drive smart, choose WheelsDeal.</p>
    </div>
   </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${cartwo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>


  <div className='text-white h-full w-full space-y-3 bg-black bg-opacity-80 flex justify-center items-center'>
  <div className='text-center'>
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Unlock the Perfect Drive with <br /><span className='text-red-600'>WheelsDeal.</span></h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Upgrade your wheels, upgrade your lifestyle! WheelsDeal brings you top-notch automotive deals. Quality meets affordability. Let&lsquo;s drive towards a great deal today!</p>
    </div>
   </div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;