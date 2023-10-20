import img from "../assets/check.jpg";
import imgone from "../assets/character.jpg";
import imgtwo from "../assets/illustration.jpg";

const Choose = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold">
        Why choose us?
      </h1>

      <div className="md:flex justify-around gap-5">
        <div className="p-5">
          <img className="mask mask-circle h-28 mx-auto" src={img} alt="" />
          <h1 className="text-center text-3xl font-bold">
            Wide range of brands
          </h1>
          <p className="text-center">
            Discover a world of choices! WheelsDeal offers an extensive range of
            top-notch brands to match your style and preferences. Find your
            perfect fit among our diverse selection.{" "}
          </p>
        </div>
        <div className="p-5">
          <img className="mask mask-circle h-28 mx-auto" src={imgone} alt="" />
          <h1 className="text-center text-3xl font-bold">
            Trusted by our clients
          </h1>
          <p className="text-center">
            Confidence in every transaction! We&lsquo;re honored to be trusted
            by our clients for seamless experiences and exceptional service.
            Join our satisfied family at WheelsDeal.
          </p>
        </div>
        <div className="p-5">
          <img className="mask mask-circle h-28 mx-auto" src={imgtwo} alt="" />
          <h1 className="text-center text-3xl font-bold">
            Fast & easy financing
          </h1>
          <p className="text-center">
            Get the speed and simplicity you deserve! Our fast & easy financing
            options make driving your dream car a breeze. Zoom into
            affordability with WheelsDeal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
