import React, {useState} from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const token = 'Bearer 1|PbziJIwrjyCcrhfr6eRW7JvFOeCyHIvqDtBs3kZI';
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post( 'http://test-app.test/api/login', {
            'email': email,
            'password': password
        })
            .then(res => {
                if(res.data.status) {
                    localStorage.setItem('token', res.data.data.plainTextToken);
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group mb-2">
                                        <input
                                            type="email"
                                            placeholder="Please enter e-mail"
                                            className="form-control"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <input
                                            type="password"
                                            placeholder="Please enter password"
                                            className="form-control"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="btn btn-primary float-end"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;