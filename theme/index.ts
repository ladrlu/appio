import {
  createTheme,
  typographyTheme,
  cardTheme,
  tagTheme,
  containerTheme,
  textLinkTheme,
  buttonTheme,
} from "anolis-ui";

export const theme = createTheme({
  ...containerTheme({
    baseStyle: {
      color: "#fff",
      backgroundColor: "dark",
    },
  }),
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontSize: { _: "2.125rem", sm: "3.75rem" },
        lineHeight: { _: "2.375rem", sm: "3.75rem" },
      },
      _h2: {
        fontSize: { _: "2.125rem", sm: "3.75rem" },
        lineHeight: { _: "2.375rem", sm: "3.75rem" },
        fontWeight: 400,
        color: "white",
      },
      _lead: {
        fontSize: { _: "1.25rem", sm: "1.5rem" },
        lineHeight: { _: "1.75rem", sm: "2rem" },
      },
    },
  }),
  ...cardTheme({
    baseStyle: {
      backgroundColor: "dark",
      padding: "lg",
      gap: "lg",
      borderWidth: "2px",
      _tag: {
        position: "static",
        alignSelf: "baseline",
      },
      _body: {
        padding: 0,
      },
      _header: {
        padding: 0,
      },
      _footer: {
        padding: 0,
        marginTop: "auto",
      },
    },
  }),
  ...tagTheme({
    baseStyle: {
      fontSize: "base",
      borderRadius: 0,
      color: "dark",
      border: 0,
    },
    variants: {
      solid: {
        background: "linear-gradient(90deg, #00D8FF 0%, #00FF94 100%)",
        color: "dark",
      },
    },
  }),
  ...textLinkTheme({
    baseStyle: {
      color: { _: "primary", hover: "linkHover" },
      fontSize: "base",
      transition: "color 300ms, border 300ms, background-color 300ms",
      backgroundColor: {
        _: "primaryTransparent",
        hover: "linkHoverTransparent",
      },
    },
    variants: {
      underlined: {
        borderColor: { _: "primary", hover: "linkHover" },
      },
    },
  }),
  ...buttonTheme({
    baseStyle: {
      borderRadius: "0",
      fontWeight: 600,
    },
    variants: {
      solid: {
        bg: {
          _: "primary",
          hover: "secondary",
          active: "secondary",
          focus: "secondary",
        },
        color: "dark",
        boxShadow: "none",
        outline: { focus: "none" },
        opacity: { disabled: 0.5 },
      },
    },
    sizes: {
      lg: {
        px: "1.5rem",
        py: "0.75rem",
        fontSize: "base",
        lineHeight: "1.2rem",
        _spinner: {
          s: "lg",
        },
      },
    },
  }),
});
