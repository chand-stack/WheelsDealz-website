import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillPenFill,BsEyeFill } from 'react-icons/bs';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import ban1 from '../assets/pb1.jpg'
import ban2 from '../assets/pb.jpg'
import ban3 from '../assets/pb2.jpg'

const Products = () => {

    const [cars,setCars] = useState([])

    const params = useParams()
    // console.log( (params.id).toLowerCase());
    const brandName = params.id.toLowerCase()

    useEffect(()=>{
        fetch(`http://localhost:5000/${brandName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCars(data)})
    },[brandName])
    return (
        <>
        <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${ban1})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" , backgroundPosition:"center"}}>

  <div className='text-white h-full space-y-3 w-full bg-black bg-opacity-50 flex justify-center items-center'>
    <div className='text-center'>  
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Get Pre-Approved for a<br /><span className='text-orange-500'>Car Loan</span> Today.</h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Discover the best auto deals at WheelsDeal! Drive in style without breaking the bank. Your dream ride is just a click away. Let&lsquo;s hit the road of savings together!</p>
    </div>
   </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${ban2})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" , backgroundPosition:"center"}}>

  <div className='text-white h-full space-y-3 w-full bg-black bg-opacity-50 flex justify-center items-center'>
    <div className='text-center'> 
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Drive Home in a New Car Today for Less Than<br /><span className='text-orange-500'>$200/Month.</span></h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Discover the best auto deals at WheelsDeal! Drive in style without breaking the bank. Your dream ride is just a click away. Let&lsquo;s hit the road of savings together!</p>
    </div>
   </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96 md:h-screen" style={{backgroundImage:`url(${ban3})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>

  <div className='text-white h-full space-y-3 w-full bg-black bg-opacity-50 flex justify-center items-center'>
    <div className='text-center'>
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>in Federal Tax Credits <br /> Get Up to<br /><span className='text-orange-500'>$7,500</span> in Federal Tax Credits</h1>
    <p className='md:text-xl font-semibold md:w-1/2 w-4/5 mx-auto'>Discover the best auto deals at WheelsDeal! Drive in style without breaking the bank. Your dream ride is just a click away. Let&lsquo;s hit the road of savings together!</p>
    </div>
   </div>

 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>

{
    cars.length>0 ? <div className="container mx-auto px-3 md:px-20">
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-20">Popular Makes</h1>
    
    <div className="grid lg:grid-cols-2 gap-5 my-20">
    
    {
        cars.map(car => <div key={car._id} className="card bg-black card-compact w-full shadow-xl">
        <figure><img className="w-full h-96" src={car.photo} alt="Car" /></figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-white">{car.name}</h2>
          <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Brand Name: </span>{car.brandName}</p>
          <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Type: </span>{car.type}</p>
          <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Price: </span>${car.price}</p>
          <div className="text-lg font-semibold flex gap-3 text-white items-center"><span className="font-semibold">Rating: </span> <span className="flex items-center gap-2"><Rating  style={{ maxWidth: 180 }}
      value={car.rating}
      readOnly></Rating> {car.rating} </span></div>
    
    <div>
    
    </div>
    
          <div className="card-actions justify-between">
            <Link to={`/detail/${car._id}`}><button className="btn btn-primary flex items-center gap-3 text-white bg-orange-500 border-none"><BsEyeFill className="text-2xl"/> View Details</button></Link>
            <Link to={`/update/${car._id}`}><button className="btn btn-primary flex items-center gap-3 text-white bg-orange-500 border-none"><BsFillPenFill className="text-2xl"/> Update Product</button></Link>
          </div>
        </div>
      </div>)
    }
    
    </div>
    
    </div> : <h1 className="text-3xl md:text-5xl flex justify-center text-orange-400 items-center h-screen font-bold container mx-auto">We&lsquo;re excited to announce that the all-new 2024 HONDA is coming soon! </h1>
}
        </>
    );
};

export default Products;