import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../supabase/supabase_init";
import '../css/login.css';
import Navbar from '../widgets/navbar';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            console.error(error);
            setLoading(false);
            return;
        }
        console.log(data);
        navigate('/');
        setLoading(false);
    };

    return (
        <div>
            <Navbar />
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleLogin}>
                    <div className="Auth-form-content">
                        <h1 className="Auth-form-title">Login</h1>
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type='submit' className="btn btn-primary">
                                {loading ? <CircularProgress size={20} color="inherit" /> : 'Login'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;