import { Link } from 'react-router-dom';
import errimg from '../assets/errorwithlandscape.jpg'

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <img className='mx-auto' src={errimg} alt="" />
            <div className='flex justify-center -mt-10 md:-mt-20'>
                <Link to="/"><button className='btn bg-purple-700 border-none text-white'>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;