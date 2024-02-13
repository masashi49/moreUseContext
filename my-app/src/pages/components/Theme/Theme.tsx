import React, { memo } from "react";
import { getPopupContext } from "../../context/PopupContext";

export const Theme = memo(() => {
  const { theme, setTheme } = getPopupContext();
  const handleChangeTheme = () =>
    setTheme(theme === "normalMode" ? "darkMode" : "normalMode");
  return <button onClick={handleChangeTheme}>テーマ変更ボタン</button>;
});
