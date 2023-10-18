import { useParams } from "react-router-dom";


const Products = () => {
    const params = useParams()
    // console.log( (params.id).toLowerCase());
    const brandName = params.id.toLowerCase()
    console.log(brandName);
    return (
        <div>
            <h1>Product list here</h1>
        </div>
    );
};

export default Products;