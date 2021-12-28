import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/Login.css";
import { auth } from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/")
                }
            })
            .catch(err => alert(err.message))

    }

    return <div className="login">
        <Link to="/">
            <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                alt=""
            />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon FAKE
                CLONE Conditions of Use & Sale.Please
                see our Privacy Notice, our Cookie Notice
                and our Interest-Based Ads Notice.
            </p>
            <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
        </div>
    </div>;
}

export default Login;
