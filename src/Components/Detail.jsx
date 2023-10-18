import { Link, useLoaderData } from "react-router-dom";
import bg from '../assets/carcover2.jpg'

const Detail = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <>
         <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500'>Details</h1>
            </div>
        </div>

<div className="container mx-auto">
<div className="container mx-auto grid lg:grid-cols-2 gap-3 my-10 p-2">
    <img className="rounded-2xl" src={loadedData.photo} alt="" />
<div className=" flex flex-col">
    <h1 className="text-2xl md:text-5xl flex-grow font-medium">{loadedData.name}</h1>
    <p className="text-2xl md:text-5xl flex-grow font-bold text-orange-400">${loadedData.price}</p>

<div className="bg-slate-100 space-y-4 p-4 flex-grow rounded-xl">
    <p className="text-xl"><span className="font-semibold">Brand Name:</span> {loadedData.brandName}</p>
    <p className="text-xl"><span className="font-semibold">Type:</span> {loadedData.type}</p>
    <p className="text-xl"><span className="font-semibold">Price:</span> {loadedData.price}</p>
    <div className="text-xl"><span className="font-semibold">Rating: </span><div className="rating">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/> {loadedData.rating}
    </div></div>
    <div><Link><button className="btn w-full text-white bg-orange-500 font-semibold">Add To Cart</button></Link></div>
</div>

</div>
</div>
<p className="text-2xl md:text-5xl flex-grow font-medium text-orange-500">More About {loadedData.name}</p>
<p className="text-lg md:text-2xl font-semibold mb-10">{loadedData.description}</p>

</div>

        </>
    );
};

export default Detail;