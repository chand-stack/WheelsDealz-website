import bg from '../assets/carcover2.jpg'

const AddProduct = () => {
    return (
        <>
        <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500'>Add Products</h1>
            </div>
        </div>

<div className='container mx-auto py-10 px-3 md:px-10 lg:px-16'>
    <form className='space-y-4'>

<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Name</h1><input type="text" placeholder="Name" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Brand Name</h1><input type="text" placeholder="Brand Name" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Type</h1><input type="text" placeholder="Type" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Price</h1><input type="text" placeholder="Price" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Short description</h1><input type="text" placeholder="Short description" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Rating</h1><input type="text" placeholder="Rating" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className=''>
<div className='space-y-2'>
    <h1 className='font-semibold'>Photo</h1><input type="text" placeholder="Photo URL" className="input input-bordered input-warning w-full" />
</div>
</div>
<div>
    <button className='btn w-full text-white bg-orange-500 font-semibold'>Add Product</button>
</div>
    </form>
</div>

        </>
    );
};

export default AddProduct;