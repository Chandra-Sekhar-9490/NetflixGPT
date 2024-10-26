import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="absolute w-screen  px-20 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex p-4 gap-3">
          <img className="w-12 h-12" src={user?.photoURL} alt="profile-logo" />
          <button onClick={handleSignout} className="font-bold">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
