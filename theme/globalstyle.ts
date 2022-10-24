import { createGlobalStyle } from "@xstyled/emotion";
import { customXstyledTheme } from "./xstyled";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
html {
  background-color: dark;
  height: 100%;

}
* {
  font-family: "Inter";
}
`;
