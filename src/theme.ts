import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "header.title": true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "header.title" },
          style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.2rem",
          },
        },
      ],
    },
  },
});

export default theme;
