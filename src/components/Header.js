import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="flex">
        <img
          className="w-44 mx-auto md:mx-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div>
            <h1
              className={`text-white m-4 ml-10 cursor-pointer ${
                activeSection === "home" ? "font-bold" : "font-thin"
              }`}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </h1>
            <h1
              className={`text-white m-4 cursor-pointer ${
                activeSection === "movies" ? "font-bold" : "font-thin"
              }`}
              onClick={() => handleSectionClick("movies")}
            >
              Movies
            </h1>
            <h1
              className={`text-white m-4 cursor-pointer ${
                activeSection === "tvShows" ? "font-bold" : "font-thin"
              }`}
              onClick={() => handleSectionClick("tvShows")}
            >
              TV Shows
            </h1>
          </div>
        )}
      </div>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="text-white h-12 bg-red-800 mx-0 px-4 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-black rounded-lg"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white h-12 bg-purple-800 mx-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
          >
            {showGptSearch ? (
              <FontAwesomeIcon icon={faHome} className="mr-2" />
            ) : (
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
            )}
            {showGptSearch ? "Homepage" : "GPT-Search"}
          </button>
          <div className="dropdown relative">
            <img
              className="w-12 h-12 rounded-lg cursor-pointer"
              alt="usericon"
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/2566/2566166.png"
              }
            />
          </div>

          <button
            onClick={handleSignOut}
            className="text-white h-12 bg-red-800 mx-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
