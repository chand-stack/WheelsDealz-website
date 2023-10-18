import Swal from 'sweetalert2';
import bg from '../assets/carcover2.jpg'

const AddProduct = () => {

const addProduct = e => {
    e.preventDefault()
    const form = e.target 
    const name = form.name.value 
    const brandName = form.brand.value
    const brandNameLower = brandName.toLowerCase()
    const type = form.type.value 
    const price = form.price.value 
    const description = form.description.value 
    const rating = form.rating.value 
    const photo = form.photo.value 
    console.log(name,brandNameLower,type,price,description,rating,photo);
    const car = {
        name,brandName,type,price,description,rating,photo
    }

    fetch(`http://localhost:5000/${brandNameLower}`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(car)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Product added successfully!',
                'success'
              )
              e.target.reset()
        }
    })

}

    return (
        <>
        <div className='h-[50vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className='h-full w-full bg-black bg-opacity-70 flex justify-center items-center'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500'>Add Products</h1>
            </div>
        </div>

<div className='container mx-auto py-10 px-3 md:px-10 lg:px-16'>
    <form onSubmit={addProduct} className='space-y-4'>

<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Name</h1><input type="text" required name='name' placeholder="Name" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Brand Name</h1><input type="text" required name='brand' placeholder="Brand Name" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Type</h1><input type="text" required name='type' placeholder="Type" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Price</h1><input type="number" required name='price' placeholder="Price" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
<div className='space-y-2'>
    <h1 className='font-semibold'>Short description</h1><input type="text" required name='description' placeholder="Short description" className="input input-bordered input-warning w-full" />
</div>
<div className='space-y-2'>
    <h1 className='font-semibold'>Rating</h1><input type="" required name='rating' placeholder="Rating" className="input input-bordered input-warning w-full" />
</div>
</div>
<div className=''>
<div className='space-y-2'>
    <h1 className='font-semibold'>Photo</h1><input type="url" required name='photo' placeholder="Photo URL" className="input input-bordered input-warning w-full" />
</div>
</div>
<div>
    <button type='submit' className='btn w-full text-white bg-orange-500 font-semibold'>Add Product</button>
</div>
    </form>
</div>

        </>
    );
};

export default AddProduct;