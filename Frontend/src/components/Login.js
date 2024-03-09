import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const Navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mail === 'abhi@gmail.com' && pass === '123') {
            Cookies.set('authenticated', true);
            Cookies.set('isAdmin', true);
            //window.location.reload();
            Navigate('/first-ad');
        }
        else if (mail === 'ak@gmail.com' && pass === '456') {
            Cookies.set('authenticated', true);
            Cookies.set('isUser', true);
           // window.location.reload();
            Navigate('/progress');

        }
        else {
            alert("invalid email or password")
        }
    }
    return (
        <>
            <div className="container mt-5" style={{ marginBottom: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-md-4 shadow">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h2 className="text-center">Login Form</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={mail}
                                            onChange={(e) => { setMail(e.target.value); }}
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3" style={{ alignItems: "center" }}>
                                        <label htmlFor="password" className="form-label">
                                            Password:
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={pass}
                                            onChange={(e) => { setPass(e.target.value); }}
                                            required=""
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 ">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                            <br></br>
                                            <br></br>
                                            <Link className="link-opacity-100" to="#">Forget Password</Link>
                                        </div>
                                        <div className="col-xl-6">
                                            <br></br>
                                            <label htmlFor="email" className="form-label">
                                                If You Are New!!
                                            </label>
                                            <br></br>
                                            <Link class="link-opacity-100" to="/signup">Sign Up Here</Link>
                                            
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}