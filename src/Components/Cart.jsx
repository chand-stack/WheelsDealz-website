import { useLoaderData } from "react-router-dom";
import bg from "../assets/carcover1.jpg";
import Swal from "sweetalert2";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Cart = () => {
  const data = useLoaderData();
  const [carts, setCarts] = useState(data);

  const cartRemove = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Great!", "Removed successfully!", "success");
          const remaining = carts.filter((car) => car._id !== _id);
          setCarts(remaining);
        }
      });
  };
  return (
    <>
      <div
        className="h-[50vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-70 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
            CART
          </h1>
        </div>
      </div>

      <div className="container mx-auto">
        {carts.length > 0 ? (
          <div className="">
            {carts.map((car) => (
              <div key={car._id} className="grid md:grid-cols-2 p-2 md:p-5">
                <img
                  className="md:rounded-l-2xl mx-auto lg:w-3/4"
                  src={car.photo}
                  alt=""
                />
                <div className="bg-slate-100 flex flex-col md:rounded-r-2xl p-3">
                  <p className="text-xl flex-grow">
                    <span className="font-semibold">Name:</span> {car.name}
                  </p>
                  <p className="text-xl flex-grow">
                    <span className="font-semibold">Type:</span> {car.type}
                  </p>
                  <p className="text-xl flex-grow">
                    <span className="font-semibold">Price:</span> {car.price}
                  </p>
                  <div className="text-xl flex gap-3 items-center">
                    <span className="font-semibold">Rating: </span>{" "}
                    <span className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={car.rating}
                        readOnly
                      ></Rating>{" "}
                      {car.rating}{" "}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => cartRemove(car._id)}
                      className="btn w-full text-white bg-orange-500 font-semibold"
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="h-screen flex justify-center items-center text-3xl md:text-5xl font-bold text-orange-500">
            Hey, your cart is still empty! Add some products to start shopping.
          </h1>
        )}
      </div>
    </>
  );
};

export default Cart;
