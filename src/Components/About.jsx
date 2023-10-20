import bg from '../assets/benz4.jpg'
import ford from '../assets/ford3.jpg'
import bgtwo from '../assets/carcover2.jpg'

const About = () => {
    return (
        <>
         <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>About Us</h1>
            </div>
        </div>

<div className='container mx-auto'>
<h1 className='text-3xl md:text-5xl font-extrabold text-center mt-8'>Welcome to <span className='text-orange-500'>WHEELSDEALS!</span></h1>
<p className='font-semibold text-center my-3 text-xl'>We are your one-stop shop for all things cars.</p>
</div>

<div className="container mx-auto grid lg:grid-cols-2 p-2 md:p-10 gap-4">
            <img src={ford} alt="" />
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold flex-grow text-center text-orange-500 md:text-4xl'>About Us</h1>
                <p className='text-xl font-semibold'>At WHEELSDEALS, we&lsquo;re passionate about cars. Our mission is to provide you with the best automotive experience</p>
                <p className='text-xl font-semibold flex-grow'>whether you&lsquo;re a car enthusiast, a buyer, or simply someone looking for information and resources related to automobiles.</p>
                <h1 className='text-3xl text-orange-500 flex-grow font-semibold text-center md:text-4xl'>Our Story</h1>
                <p className='text-xl font-semibold'>WHEELSDEALS was founded 2015 by a group of dedicated car enthusiasts who saw a need for a one-stop destination for all things automotive. With years of experience in the industry, our team is committed to sharing our knowledge and love for cars with the world.</p>
            </div>
        </div>

<div className='container mx-auto'>
<p className='font-semibold text-center my-3 text-xl'>At WHEELDEALS, we are passionate about cars. We believe that everyone deserves to own a reliable and affordable car, and we are here to help you find the perfect car for your needs.</p>
</div>

<div className="container mx-auto grid lg:grid-cols-2 p-2 md:p-10 gap-4">
            
            <div className='flex flex-col'>
                
                <p className='text-xl flex-grow font-semibold'>We have a wide selection of new and used cars to choose from, and our team of experienced sales professionals is here to help you find the right car for your budget and lifestyle. We also offer a variety of financing options to make it easy for you to get behind the wheel of your dream car.</p>
                <p className='text-xl font-semibold flex-grow'>In addition to our sales department, we also have a full-service service department that can handle all of your car maintenance and repair needs. Our team of certified technicians is here to keep your car running smoothly for years to come..</p>
            </div>
            <img src={bg} alt="" />
        </div>

        <div className='h-[40vh] container mx-auto my-10' style={{backgroundImage:`url(${bgtwo})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-gradient-to-r from-orange-500 bg-opacity-70 flex justify-center items-center'>
              <p className='text-xl md:text-4xl font-extrabold px-5 text-white'>We are committed to providing our customers with the best possible car buying and ownership experience. That&lsquo;s why we offer a 100% satisfaction guarantee on all of our cars and services.</p>
            </div>
        </div>
        </>
        
    );
};

export default About;