import { defaultTheme } from "@xstyled/system";
import { anolisXstyledTheme, pipeThemes } from "anolis-ui";

export const customXstyledTheme = pipeThemes(defaultTheme, anolisXstyledTheme, {
  colors: {
    primary: "#00D8FF",
    primaryTransparent: "rgba(0, 216, 255, 0.05)",
    secondary: "#FF00C7",
    dark: "#080C18",
    white: "#fff",
    text: "#7986AF",
    linkHover: "#01FF97",
    linkHoverTransparent: "rgba(1, 255, 151, 0.05)",
  },
  fonts: {
    display: "Inter",
    body: "Inter",
  },
  space: {
    sm: "8px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "96px",
  },
  shadows: {
    card: "0px 16px 32px rgba(20, 27, 49, 0.5)",
  },
});
