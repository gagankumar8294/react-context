import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const { theme , setTheme } = useContext(themeContext);
  const { language , setLanguage } = useContext(languageContext);

  const themeChange = () => {
    setTheme(prevTheme => {
      return (
        prevTheme === "light" ? "dark" : "light"
      )
    });
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={themeChange}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
