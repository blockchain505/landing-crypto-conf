import { Link, Stack, Toolbar, Typography } from "@mui/material";

import NextLink from "next/link";
import RegisterButton from "../RegisterButton";

const Header = () => {
  return (
    <Toolbar>
      <NextLink href="/">
        <Link underline="none">
          <Typography variant="header.title">BLOCKTECH 2022</Typography>
        </Link>
      </NextLink>
      <Stack
        direction="row"
        sx={{ ml: "auto", display: { xs: "none", sm: "flex" } }}
        alignItems="center"
        spacing={4}
      >
        <NextLink href="/donate">
          <Link underline="none">
            <Typography variant="header.nav">DONAR</Typography>
          </Link>
        </NextLink>
        <Link href="/about" underline="none">
          <Typography variant="header.nav">A CERCA DE</Typography>
        </Link>
        <Link href="https://t.me/+kIpoL32xL8owOTJh" underline="none">
          <Typography variant="header.nav">TELEGRAM</Typography>
        </Link>
        <RegisterButton width="11rem" />
      </Stack>
    </Toolbar>
  );
};

export default Header;
