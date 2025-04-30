import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { RiSunFill, RiMoonFill, RiFontSize2 } from "react-icons/ri";

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();
  const [fontSize, setFontSize] = useState("medium"); // Başlangıçta varsayılan boyutu ayarla

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const toggleReduceAnimations = () => {
    dispatch({ type: "TOGGLE_REDUCE_ANIMATIONS" });
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    let fontSizeClass = "";
    switch (size) {
      case "small":
        fontSizeClass = "text-sm";
        break;
      case "medium":
        fontSizeClass = "text-base";
        break;
      case "large":
        fontSizeClass = "text-lg";
        break;
      default:
        fontSizeClass = "text-base";
    }
    dispatch({ type: "SET_FONT_SIZE", payload: fontSizeClass });
  };

  return (
    <div className="flex gap-4">
      <div className="switchicons cursor-pointer">
        {state.theme === "light" ? (
          <RiMoonFill size="1.3em" onClick={toggleTheme} />
        ) : (
          <RiSunFill size="1.3em" onClick={toggleTheme} />
        )}
      </div>
      <div className="switchfont flex gap-1">
        <button
          onClick={() => handleFontSizeChange("small")}
          className={`${
            fontSize === "small"
              ? "active dark:text-white text-slate-900"
              : "text-slate-400"
          }`}
        >
          <RiFontSize2 size="0.8em" />
        </button>
        <button
          onClick={() => handleFontSizeChange("medium")}
          className={`${
            fontSize === "medium"
              ? "active dark:text-white text-slate-9000"
              : "text-slate-400"
          }`}
        >
          <RiFontSize2 size="0.9em" />
        </button>
        <button
          onClick={() => handleFontSizeChange("large")}
          className={`${
            fontSize === "large"
              ? "active dark:text-white text-slate-900"
              : "text-slate-400"
          }`}
        >
          <RiFontSize2 size="1.2em" />
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
