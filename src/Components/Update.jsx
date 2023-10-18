import { useLoaderData } from "react-router-dom";
import bg from '../assets/carcover2.jpg'
const Update = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    return (
        <>
        <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500'>Update Product</h1>
            </div>
        </div>

<div className='container mx-auto py-10 px-3 md:px-10 lg:px-16'>
    <form className='space-y-4'>

<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Name</h1><input type="text" required defaultValue={loadedData.name} name='name' placeholder="Name" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Brand Name</h1><input type="text" defaultValue={loadedData.brandName} required name='brand' placeholder="Brand Name" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Type</h1><input type="text" required name='type' defaultValue={loadedData.type} placeholder="Type" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Price</h1><input type="number" required name='price' defaultValue={loadedData.price} placeholder="Price" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Short description</h1><input type="text" required name='description' defaultValue={loadedData.description} placeholder="Short description" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Rating</h1><input type="" required name='rating' defaultValue={loadedData.rating} placeholder="Rating" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className=''>
<div className='space-y-2'>
    <h1 className='font-semibold'>Photo</h1><input type="url" required name='photo' defaultValue={loadedData.photo} placeholder="Photo URL" className="input input-bordered input-warning w-full" />
</div>
</div>
<div>
    <button type='submit' className='btn w-full text-white bg-orange-500 font-semibold'>Update Product</button>
</div>
    </form>
</div>
        
        </>
    );
};

export default Update;