import { Box, Link, Stack, Toolbar, Typography } from "@mui/material";
import Social from "./Social";
import Sponsors from "./Sponsors";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "12rem",
        padding: {
          xs: "2rem 1rem",
          sm: "0 4rem 5rem",
          xl: "0 4rem 9rem",
        },
      }}
    >
      <Box sx={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Box>
          <Sponsors />
          <Social />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
