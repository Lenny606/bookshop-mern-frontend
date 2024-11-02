import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {getBaseUrl} from "../utils/baseUrl.js";

const AdminLogin = () => {

    const [message, setMessage] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    // const {loginUser, signInWithGoogle} = useAuth();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(getBaseUrl()+'/api/v1/auth/admin',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            const auth = await response.data
            console.log(auth)
            if (auth.token) {
                localStorage.setItem("token", auth.token)
                //set expiration with Timeout
                setTimeout(()=> {
                    localStorage.removeItem('token')
                    alert('Token has expired. Login.')
                    navigate("/")
                }, 3600*1000)
            }
            navigate("/dashboard")
        } catch (e) {
            // setMessage("Provide credentials")
        }

    }
    // const handleGoogleSignIn = async() => {
    //     try {
    //         await signInWithGoogle()
    //         navigate("/")
    //     } catch (e) {
    //         setMessage("Google sign failed")
    //         console.error(e)
    //     }
    // };

    return (
        <div className={"h-[calc(100vh-120px)] flex justify-center items-center"}>
            <div className={'w-full max-w-sm mx-auto rounded-md shadow-md bg-light-grey px-8 py-8 mb-4'}>
                <h2 className={'text-2xl font-medium mb-4'}>Admin Dashboard Login</h2>
                {/*<input type={'text'} placeholder={"name"} className={"border rounded"}></input>*/}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'mb-4'}>
                        <label htmlFor={'username'}
                               className={'block text-gray-700 text-sm font-medium mb-2'}>Username</label>
                        <input  {...register("username", { required: true })}
                            type={'text'} name={"username"} id={'username'} placeholder={"Username"}
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
                        className={'p-1 sm:px-6 px-2 w-full rounded-md bg-primary hover:bg-secondary font-medium mb-2'}>Login
                    </button>
                </form>
                {/*<p className={'font-medium text-sm align-baseline'}>Haven't an account? Register <Link to={'/register'}*/}
                {/*                                                                                       className={'text-dark-blue hover:underline'}>here.</Link>*/}
                {/*</p>*/}

                <p className={'mt-4 italic text-sm font-medium text-gray text-center '}>@{new Date().getFullYear()}. All right reserved</p>
            </div>
        </div>
    )
}
export default AdminLogin;