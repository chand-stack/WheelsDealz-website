import benz from '../assets/benz4.jpg'
const AboutUs = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 p-2 md:p-10 gap-4">
            <img src={benz} alt="" />
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold flex-grow text-center text-orange-500 md:text-4xl'>About Us</h1>
                <p className='text-xl font-semibold'>At WHEELSDEALS, we&lsquo;re passionate about cars. Our mission is to provide you with the best automotive experience</p>
                <p className='text-xl font-semibold flex-grow'>whether you&lsquo;re a car enthusiast, a buyer, or simply someone looking for information and resources related to automobiles.</p>
                <h1 className='text-3xl text-orange-500 flex-grow font-semibold text-center md:text-4xl'>Our Story</h1>
                <p className='text-xl font-semibold'>WHEELSDEALS was founded 2015 by a group of dedicated car enthusiasts who saw a need for a one-stop destination for all things automotive. With years of experience in the industry, our team is committed to sharing our knowledge and love for cars with the world.</p>
            </div>
        </div>
    );
};

export default AboutUs;