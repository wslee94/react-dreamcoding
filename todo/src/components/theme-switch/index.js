import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import style from "./style.module.css";

const ThemeSwitch = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={style.wrapper_header}>
      <button className={style.button_theme} onClick={switchTheme}>
        {theme === "dark" ? (
          <FontAwesomeIcon className={style.icon} icon={solid("sun")} />
        ) : (
          <FontAwesomeIcon className={style.icon} icon={solid("moon")} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
