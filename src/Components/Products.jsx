import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillPenFill,BsEyeFill } from 'react-icons/bs';



const Products = () => {

    const [cars,setCars] = useState([])

    const params = useParams()
    // console.log( (params.id).toLowerCase());
    const brandName = params.id.toLowerCase()
    console.log(brandName);

    useEffect(()=>{
        fetch(`http://localhost:5000/${brandName}`)
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <>
        <div>
            <h1>banner will be here</h1>
        </div>

<div className="container mx-auto px-3 md:px-20">
<h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Popular Makes</h1>

<div className="grid lg:grid-cols-2 gap-5 my-20">

{
    cars.map(car => <div key={car._id} className="card bg-slate-700 card-compact w-full shadow-xl">
    <figure><img className="w-full h-96" src={car.photo} alt="Car" /></figure>
    <div className="card-body">
      <h2 className="text-xl font-bold text-white">{car.name}</h2>
      <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Brand Name: </span>{car.brandName}</p>
      <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Type: </span>{car.type}</p>
      <p className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Price: </span>${car.price}</p>
      <div className="text-lg font-semibold text-white"><span className="font-bold text-orange-400">Rating: </span><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/> {car.rating}
</div></div>

<div>

</div>

      <div className="card-actions justify-between">
        <button className="btn btn-primary flex items-center gap-3 text-white bg-orange-500 border-none"><BsEyeFill className="text-2xl"/> View Details</button>
        <button className="btn btn-primary flex items-center gap-3 text-white bg-orange-500 border-none"><BsFillPenFill className="text-2xl"/> Update Product</button>
      </div>
    </div>
  </div>)
}

</div>

</div>
        </>
    );
};

export default Products;