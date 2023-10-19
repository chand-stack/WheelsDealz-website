import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
       <div className=" container mx-auto px-2">
       <form className="card-body max-w-2xl mx-auto border border-orange-500 my-10 shadow-2xl"> 
        <h1 className="text-center text-3xl font-bold">Login <span className="text-orange-500">Now!!</span></h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered border border-orange-500" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-400 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered border border-orange-500" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-500 text-white border-none">Login</button>
        </div>
        <p className="font-semibold text-center">Do Not have an account? please <Link className="text-orange-500" to="/register">Register</Link></p>
      </form>

       </div>
        </>
    );
};

export default Login;