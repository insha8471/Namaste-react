import React, { useRef, useState } from 'react';
import background from "../../login_bg.webp";
import { checkValidate } from "../utils/checkValidate";
import { createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignUp, setIstSignUp] = useState(false);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState(null);

    const toggleButton = () => {
        setIstSignUp(!isSignUp);
    };

    const handleSignInButton = () => {
      console.log(email.current.value);
      console.log(password.current.value);
    
      const message = checkValidate(email.current.value,password.current.value); 
      setErrorMessage(message);
      if(message) return;

      // sign in /sign up
      console.log(errorMessage);

      if(isSignUp) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName
                    }))
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
      }else{
        // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
      }


    }

    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Background Image */}
            <img
                src={background}
                alt="login"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Form Section */}
            <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 rounded-lg p-6 md:p-8 shadow-2xl flex flex-col items-center">
                <h1 className="text-center font-bold text-2xl md:text-4xl text-gray-700 mb-6">
                    {isSignUp ? "Sign Up Form" : "Login Form"}
                </h1>
                {/* Conditional input for Sign In */}
                {isSignUp && (
                    <input
                        ref={name}
                        className="mb-4 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 w-full focus:border-orange-700 outline-none"
                        type="text"
                        placeholder="Name"
                    />
                )}
                <input
                    ref={email}
                    className="mb-4 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 w-full focus:border-orange-700 outline-none"
                    type="email"
                    placeholder="Email"
                />
                <input
                    ref={password}
                    className="mb-4 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 w-full focus:border-orange-700 outline-none"
                    type="password"
                    placeholder="Password"
                />
                <span className='text-red-700 font-medium text-sm'>{errorMessage}</span>
                <button
                    className="w-full bg-orange-400 text-white rounded-xl px-4 py-2 mt-3 hover:bg-orange-300 transition duration-300"
                    type="button"
                    onClick={handleSignInButton}
                >
                    {isSignUp ? "Sign Up" : "Login"}
                </button>
                <p className="text-center font-semibold text-orange-400 mt-4">
                    { isSignUp ? "Already" : "Don't" } have an account?{" "}
                    <span
                        className="cursor-pointer font-bold hover:text-black"
                        onClick={toggleButton}
                    >
                        {isSignUp ? "Login" : "sign up"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
