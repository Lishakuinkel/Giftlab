import React from 'react';
import Header from '../../components/Form/Header';
import Signup from "../../components/Signup/Signup";

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