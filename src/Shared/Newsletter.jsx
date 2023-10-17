
const Newsletter = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center my-10 gap-3">
            <h1 className="text-3xl md:text-5xl font-bold">Newsletter</h1>
            <div>
            <input type="text" placeholder="Your email address" className="input input-bordered input-lg w-[500px] max-w-xs" />
            </div>
            <div>
            <button className="btn text-white bg-orange-500 btn-secondary px-12 border-none">Sign up</button>
            </div>
            <p className="text-xl">Subscribe to our newsletter and stay updated with our offer</p>
        </div>
    );
};

export default Newsletter;