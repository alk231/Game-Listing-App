import React, { useContext,useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(localStorage.getItem("theme")?localStorage.getItem("theme"):"dark")
  }, [])
  

  return (
    <div className="">
      <div className="flex items-center gap-4 p-3">
        <div className="w-20 h-20 rounded-full dark:bg-slate-50">
  <img
    src="image.png"
    alt="Logo"
    className="w-20 h-20 mix-blend-multiply"
  />
</div>


        <div className="flex items-center bg-slate-200 w-full rounded-full p-3 py-auto">
          <HiMagnifyingGlass/>
          <input
            type="text"
            placeholder="Search Game"
            className="bg-transparent outline-none px-2"
          />
        </div>
        <div className="cursor-pointer">
          {theme === "dark" ? (
            <HiMoon
              className="text-[35px] bg-gray-200 text-black rounded-full p-1 text-center"
              onClick={() => {setTheme("light"); localStorage.setItem("theme","light")}} // Switch to light mode
            />
          ) : (
            <HiSun
              className="text-[35px] bg-white text-black rounded-full p-1 text-center"
              onClick={() => {setTheme("dark"); localStorage.setItem("theme","dark")}} // Switch to dark mode
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
