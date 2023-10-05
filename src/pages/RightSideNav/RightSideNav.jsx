import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import  qZone1  from '../../assets/qZone1.png'
import  qZone2  from '../../assets/qZone2.png'
import  qZone3  from '../../assets/qZone3.png'
import { Link } from 'react-router-dom';
const RightSideNav = () => {
    return (
        <div className='rounded-lg p-3'>
            <div className='mb-6'>
                <h2 className="text-xl font-bold mb-3">Login With</h2>
                <button className="btn hover:btn-secondary w-full mb-4">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn hover:btn-secondary w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className='mb-6'>
                <h2 className="text-xl font-bold mb-3">Find Us On</h2>
                <a className='flex items-center border p-3 gap-2 hover:bg-[#d3eaf2] rounded-t-lg' href="https://www.facebook.com/md.dinar.56808995"><FaFacebook></FaFacebook>Facebook</a>
                <a className='flex items-center border p-3 gap-2 hover:bg-[#d3eaf2]' href="https://twitter.com/DinarWeb14783"><FaTwitter></FaTwitter>Twitter</a>
                <a className='flex items-center border p-3 gap-2 hover:bg-[#d3eaf2] rounded-b-lg' href="https://www.instagram.com/webdevdd/?hl=en"><FaInstagram></FaInstagram>Instagram</a>
            </div>
            <div className=''>
                <h2 className="text-xl font-bold mb-3">Q Zone</h2>
                <h2 className='text-center my-4'>Advertizement</h2>
                <Link  to={'https://www.goldfishswimschool.com/'}>
                <img src={qZone1} alt="" className='hover:mt-[-10px]'/>
                </Link>
                <Link to={'https://10minuteschool.com/?aff=fbg13088&utm_medium=affiliation&utm_source=2072&utm_campaign=eidrewards23&utm_content=facebook&type=affiliate&gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7g298TS72difjk6Io1MZLcRwyXQlMb6oNsyb7oJhfPsosQDsw8Z_LcaAjSEEALw_wcB'}>
                <img src={qZone2} alt="" className='hover:mt-[-10px]'/>
                </Link>
                <Link to={'https://en.thaiplayequipment.com/?gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7jnS4mj1Q9IRGYXFdUU7aC9VRxiP1oyAGW8UUabp5It_9BhilNTZkgaAj0TEALw_wcB'}>
                <img src={qZone3} alt="" className='hover:mt-[-10px]'/>
                </Link>
            </div>
        </div>
    );
};

export default RightSideNav;