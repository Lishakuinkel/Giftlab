import React from 'react';
import Header from '../../components/Form/Header';
import Login from '../../components/Login/Login';

const login = () => {
    return (
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
        </>
    )
}

export default login