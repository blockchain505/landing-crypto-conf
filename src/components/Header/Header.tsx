import { Drawer, Link, Stack, Toolbar, Typography } from "@mui/material";

import NextLink from "next/link";
import { useState } from "react";
import RegisterButton from "../RegisterButton";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <Toolbar>
      <NextLink href="/">
        <Link underline="none">
          <Typography variant="header.title">BLOCKTECH 2022</Typography>
        </Link>
      </NextLink>

      <Typography
        sx={{
          color: "common.white",
          marginLeft: "auto",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setOpenDrawer(true)}
      >
        MENU
      </Typography>

      <Drawer
        anchor={"right"}
        PaperProps={{
          sx: {
            width: "300px",
            background: "linear-gradient(68deg, #097fd9 0%, #13c6db 99.05%)",
          },
        }}
        open={openDrawer}
        onClose={(): void => setOpenDrawer(false)}
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={10}
          sx={{ paddingTop: "4rem" }}
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
      </Drawer>

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
