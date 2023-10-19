import { useLoaderData } from 'react-router-dom';
import bg from '../assets/carcover1.jpg'

const Cart = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <>
        <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>CART</h1>
            </div>
        </div>

<div className='container mx-auto'>

<div className=''>

{
    data.map(car => <div key={car._id} className='grid md:grid-cols-2 p-2 md:p-5'>
        <img className='md:rounded-l-2xl' src={car.photo} alt="" />
        <div className='bg-slate-100 flex flex-col md:rounded-r-2xl p-3 hover:bg-black hover:text-white hover:duration-1000'>

        <p className="text-xl flex-grow"><span className="font-semibold">Brand Name:</span> {car.brandName}</p>
    <p className="text-xl flex-grow"><span className="font-semibold">Type:</span> {car.type}</p>
    <p className="text-xl flex-grow"><span className="font-semibold">Price:</span> {car.price}</p>
    <div className="text-xl flex-grow"><span className="font-semibold">Rating: </span><div className="rating">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/> {car.rating}
    </div></div>
    <div><button className="btn w-full text-white bg-orange-500 font-semibold">Delete</button></div>

        </div>
    </div>)
}

</div>

</div>

        </>
    );
};

export default Cart;