import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.init';


const SignUp = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleSignUp = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        });
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">LogIn or Sign Up now</h1>
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
                        <button onClick={handleSignUp} className="btn btn-primary w-full">Google</button>
                        <button className="btn btn-primary w-full">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;