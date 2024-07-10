import React from 'react';
import './style.css'

const Login = () => {

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
                <input name='email' type='email' placeholder='example@example.com'/>
                <input name='password' type='password' placeholder='Some password'/>
                <button type='submit'>Login</button>
            </form>
        </main>
    );
};

export default Login;