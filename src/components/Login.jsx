import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {FaGoogle} from "react-icons/fa";
import { useForm } from "react-hook-form";
import {useAuth} from "../context/auth/AuthContext.jsx";

const Login = () => {

    const [message, setMessage] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const {loginUser, signInWithGoogle} = useAuth();
    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password)
            navigate("/")
        } catch (e) {
            setMessage("Provide credentials")
        }

    }
    const handleGoogleSignIn = async() => {
        try {
            await signInWithGoogle()
            navigate("/")
        } catch (e) {
            setMessage("Google sign failed")
            console.error(e)
        }
    };

    ;
    return (
        <div className={"h-[calc(100vh-120px)] flex justify-center items-center"}>
            <div className={'w-full max-w-sm mx-auto rounded-md shadow-md bg-light-grey px-8 py-8 mb-4'}>
                <h2 className={'text-2xl font-medium mb-4'}>Please Login</h2>
                {/*<input type={'text'} placeholder={"name"} className={"border rounded"}></input>*/}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'mb-4'}>
                        <label htmlFor={'email'}
                               className={'block text-gray-700 text-sm font-medium mb-2'}>Email</label>
                        <input  {...register("email", { required: true })}
                            type={'email'} name={"email"} id={'email'} placeholder={"Email"}
                               className={"shadow appearance-none border-gray w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-primary "}/>
                    </div>
                    {
                        message && <p className={'text-red-500 text-xs italic mb-3'}>{message}</p>
                    }
                    <div className={'mb-4'}>
                        <label htmlFor={'password'}
                               className={'block text-gray-700 text-sm font-medium mb-2'}>Password</label>
                        <input  {...register("password", { required: true })}
                            type={'password'} name={"password"} id={'password'} placeholder={"Password"}
                               className={"shadow appearance-none border-gray w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-primary "}/>
                    </div>
                    {
                        message && <p className={'text-red-500 text-xs italic mb-3'}>{message}</p>
                    }
                    <button
                        className={'p-1 sm:px-6 px-2 w-full sm:w-1/2 rounded-md bg-primary hover:bg-secondary font-medium mb-2'}>Login
                    </button>
                </form>
                <p className={'font-medium text-sm align-baseline'}>Haven't an account? Register <Link to={'/register'}
                                                                                                       className={'text-dark-blue hover:underline'}>here.</Link>
                </p>

                {/*    GOOGLE LOGIN */}
                <div className={'mt-4'}>
                    <button onClick={handleGoogleSignIn}
                        className={'w-full flex flex-wrap items-center justify-center gap-1 bg-secondary hover:bg-primary font-medium rounded py-2 px-4 '}>
                        <FaGoogle className={'mr-2'}/>
                        Sign in with Google
                    </button>
                </div>
                <p className={'mt-4 italic text-sm font-medium text-gray text-center '}>@{new Date().getFullYear()}. All right reserved</p>
            </div>
        </div>
    )
}
export default Login;