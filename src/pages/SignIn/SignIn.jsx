import React from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../components/Context/ApiContext'

export const SignIn = () => {

    const { googleSingIn } = UserAuth();

    const handleGoogleSignIn = async () => {

        try {
            await googleSingIn();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Sign IN</h1>
            <GoogleButton onClick={handleGoogleSignIn} />
        </>
    )
}


