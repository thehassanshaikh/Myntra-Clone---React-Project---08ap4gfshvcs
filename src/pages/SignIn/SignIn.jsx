import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import './SignIn.css'
// import GoogleButton from 'react-google-button';
// import { UserAuth } from '../../components/Context/ApiContext'

export const SignIn = () => {
    
    const [number,setNumber] = useState();

    const navigate = useNavigate()

//     const { googleSingIn } = UserAuth();

//     const handleGoogleSignIn = async () => {

//         try {
//             await googleSingIn();
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (
//         <>
//             <h1>Sign IN</h1>
//             <GoogleButton onClick={handleGoogleSignIn} />
//         </>
//     )

        const handleForm = (e) =>{
            e.preventDefault();
            
            // if(number.length < 10){
            //     alert("please enter the correct number");
            // }else(
            //     navigate('/')
            // )
        }

        return (
            <section className='singin-container'>
                <div className="login-con">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg" alt="" />
                    <div className="form-controller">
                        <h2><strong>Login</strong> or <strong>Signup</strong></h2>
                        <form onSubmit={handleForm}>
                            <input className='signin-inpt' type="number" placeholder='+91 | Mobile Number*' value={number} onChange={(e)=>setNumber(number)}/>
                            <p className='sign-tc'>By continuing, I agree to the <strong className='signin-t'>Terms & of Uses</strong> & <strong className='signin-t'>Privacy Policy</strong></p>
                            <button type='submit' className='signin-submit-btn'>Continue</button>
                        </form>
                        <p className='sign-tc'>Have trouble in loggin ? <strong className='signin-t'>Get help</strong></p>
                    </div>
                </div>
            </section>
        )
}


