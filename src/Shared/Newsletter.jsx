import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="container mx-auto  my-10 space-y-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Newsletter</h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Your email address"
          className="input input-bordered input-lg w-[500px] max-w-xs"
        />
      </div>
      <div className="flex justify-center">
        <Link to="/register">
          <button className="btn text-white bg-orange-500 btn-secondary px-12 border-none">
            Sign up
          </button>
        </Link>
      </div>
      <p className="text-xl flex justify-center text-current">
        Subscribe to our newsletter and stay updated with our offer
      </p>
    </div>
  );
};

export default Newsletter;
