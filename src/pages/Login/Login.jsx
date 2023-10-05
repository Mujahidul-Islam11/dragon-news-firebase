/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Nav></Nav>
            <h1 className="text-3xl text-center">Please Login</h1>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Login</button>
                        <h3 className="mt-6 text-center">Don't have an account? <Link className="hover:border-b hover:border-blue-600 text-blue-600 font-bold" to={'/register'}>Register</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;