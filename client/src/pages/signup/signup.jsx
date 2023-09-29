import React from 'react';
import Header from '../../components/Header';
import Signup from "../../components/Signup";

const signup = () => {
    return (
        <>
            <Header
                heading="Create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
            />
            <Signup />
        </>
    )
}

export default signup