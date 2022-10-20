import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "header.title": true;
    "header.nav": true;
    "sections.title": true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "button.main": true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    "page.section": true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    body2: {
      color: "#fff",
      fontFamily: "Poppins",
      fontSize: "1rem",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "header.title" },
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.4rem",
            cursor: "pointer",
          },
        },
        {
          props: { variant: "header.nav" },
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          },
        },
        {
          props: { variant: "sections.title" },
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
          },
        },
      ],
    },
    MuiStack: {},
    MuiButton: {
      variants: [
        {
          props: { variant: "button.main" },
          style: {
            background:
              "linear-gradient(90deg, #FFD74D 0%, #40DDFF 33.33%, #7C7FFF 100%)",
            color: "#fff",
            borderRadius: "2px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            width: "18rem",
            animation: "1.5s ease 0s infinite alternate none running jNbght",
            fontWeight: "bold",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            letterSpacing: "1px",
            clipPath:
              "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            transition: "all 0.2s ease 0s;",
          },
        },
      ],
    },
  },
});

export default theme;
