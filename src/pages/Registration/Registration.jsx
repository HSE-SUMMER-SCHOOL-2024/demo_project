import React from 'react';

const Registration = () => {

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
                    placeholder='example@example.com'
                />
                <input
                    name='name'
                    type='name'
                    placeholder='Nikita'
                />
                <input
                    name='surname'
                    type='surname'
                    placeholder='Dumkin'
                />
                <input
                    name='password'
                    type='password'
                    autoComplete='new-password'
                    placeholder='Some password'
                />
                <button type='submit'>Login</button>
            </form>
        </main>
    );
};

export default Registration;