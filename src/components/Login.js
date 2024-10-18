import { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  function toggleSignInForm() {
    setSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_medium.jpg"
          alt="background-image"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black bg-opacity-80 my-40 mx-auto right-0 left-0 text-white  ">
        <h1 className="font-bold text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-black bg-opacity-20 border rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email or Mobile number"
          className="p-4 my-2 w-full bg-black bg-opacity-20 border rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black bg-opacity-20 border rounded-md"
        />

        <button className="p-2 my-2 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-2">
          <input type="checkbox" />
          <label className="mx-2">Remember me</label>
        </div>

        {isSignInForm ? (
          <p className="mt-4 cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? <span className="font-bold">Sign Up now</span>
          </p>
        ) : (
          <p className="mt-4 cursor-pointer" onClick={toggleSignInForm}>
            Already have account?{" "}
            <span className="font-bold">Sign In here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
