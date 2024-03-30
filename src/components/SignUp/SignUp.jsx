import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';


const SignUp = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleSignOut = () =>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {
                        user && <div>
                            <h1 className="text-2xl font-bold">User: {user.displayName}</h1>
                            <p className="">Email: {user.email}</p>
                            <img src={user.photoURL} alt="" />
                        </div>
                    }
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mb-8 mx-8 text-center space-y-2">
                        <p>Or Sign Up with</p>
                        {
                            user ? <button onClick={handleSignOut} className="btn btn-primary w-full">Sign Out</button> :
                            <div className='space-y-2'>
                                <button onClick={handleSignUp} className="btn btn-primary w-full">Google</button>
                                <button className="btn btn-primary w-full">GitHub</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;