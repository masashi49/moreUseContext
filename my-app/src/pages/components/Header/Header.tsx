import React, { memo } from "react";
import { getPopupContext } from "../../context/PopupContext";
import { Theme } from "../Theme/Theme";

export const Header = memo((props) => {
  const { theme } = getPopupContext();
  return (
    <div>
      <p>{theme}</p>
      <Theme />
    </div>
  );
});
