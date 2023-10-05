/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../pages/Navbar/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Nav></Nav>
            <h1 className="text-3xl text-center">Please Register</h1>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
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
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                        <h3 className="mt-4 text-center">Already have an account? <Link className="hover:border-b hover:border-blue-600 text-blue-600 font-bold" to={'/login'}>Login</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;