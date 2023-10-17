import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className="container mx-auto my-20">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-11 text-center">Popular Brands</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-14">
                {
             brands?.map(brand => <Link to={`/products/${brand?.name}`} key={brand?.id}>
             <div  className="bg-orange-500 p-5 card rounded-2xl hover:bg-slate-600 hover:duration-1000 shadow-lg">
                <img className="mask mask-squircle h-40 w-48 mx-auto" src={brand?.img} alt="" />
                <h1 className="text-white text-center text-2xl font-bold">{brand?.name}</h1>
             </div>
             </Link>)
                }
            </div>
        </div>
    );
};

export default Brands;