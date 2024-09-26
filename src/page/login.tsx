import React, { FormEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { ParkingSystemService } from '../api/parking-system';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        ParkingSystemService.login(email, password)
            .then(res => {
                console.log(res)
                Cookies.set("jwt", res.message)
                navigate("/")
            })
            .catch(err => console.log(err.response.data))
    }
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Login</h2>
                        <form onSubmit={onFormSubmit}>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input name="email" value={email} onChange={(e)=> setEmail(e.target.value)} type="text" autoComplete="off" placeholder="Email" className="grow"  />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 my-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input name="password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" autoComplete="off" placeholder="Password" className="grow" />
                            </label>
                            <button type="submit" className="btn btn-neutral">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
