import { useRef, useState } from "react";
import { validateSignInData } from "../utils/ValidationUtils";
import { LOGIN_BG_IMG } from "../utils/constants";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const userName = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const handleSignInClick = () => {
    const validationRes = validateSignInData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationRes);
    if (validationRes) return;

    if (!isSignUp) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential.user);
          updateProfile(auth.currentUser, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div
      className="flex justify-center items-center w-full bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${LOGIN_BG_IMG})` }}
    >
      <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4 w-auto">
        {isSignUp && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              ref={userName}
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder=""
            ref={email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            ref={password}
          />
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignInClick}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <div className="w-40 inline-block align-baseline font-bold text-sm text-blue-500 pl-10">
            {isSignUp ? (
              <>
                <span> Existing user? </span>
              </>
            ) : (
              <span> New to GPT-Flix? </span>
            )}
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
              href="#"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In." : "Sign up now."}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
