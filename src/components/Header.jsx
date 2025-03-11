import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="font-bold absolute top-0 left-0 text-white w-full bg-gradient-to-t to-gray-950 h-20 flex justify-between">
      <span>GPT-Flix</span>
      {user && (
        <div className="flex">
          <div className="w-10 h-10 rounded-full bg-white text-black text-center p-2 m-3 font-extrabold size-0.5">
            <span>{user.displayName ? user.displayName[0] : ""}</span>
          </div>
          <button onClick={handleSignOut} className="flex pt-5 cursor-pointer">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
