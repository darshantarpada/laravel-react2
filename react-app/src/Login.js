import Header from './Header.js';
import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () =>{
    const history = useHistory();   

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/add');
        }
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async () => {
        let item = {email, password }
        let result = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/add');
    }
    return (
        <div>
            <Header />  
            <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="email" placeholder="email" nvalue={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />

            <button onClick={signIn} className="btn btn-primary">Sign in</button>
        </div>
        </div>
    );
}
export default Login;