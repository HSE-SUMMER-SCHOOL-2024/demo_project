import React, {useEffect, useState} from 'react';
import './style.css'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {POST_PAGE} from "../../router/consts";

const Login = () => {

    const isAuth = useSelector(state => state.user.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) return;
        navigate(POST_PAGE);
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const body = {};

        for (const [key, value] of formData.entries()) {
            body[key] = value;
        }

        console.log(body);

    }

    return (
        <main className='page'>
            <form onSubmit={submitHandler}>
                <input
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='example@example.com'
                />
                <input
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    placeholder='Some password'
                />
                <button type='submit'>Login</button>
            </form>
        </main>
    );
};

export default Login;