import { Link, Stack, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Toolbar>
      <Typography variant="header.title">BLOCKTECH 2022</Typography>
      <Stack
        direction="row"
        sx={{ ml: "auto", display: { xs: "none", sm: "block" } }}
        spacing={4}
      >
        <Link>
          <Typography variant="header.nav">PARTICIPACION</Typography>
        </Link>
        <Link>
          <Typography variant="header.nav">DONAR</Typography>
        </Link>
        <Link>
          <Typography variant="header.nav">A CERCA DE</Typography>
        </Link>

        <Link
          href="https://t.me/+kIpoL32xL8owOTJh"
        >
          <Typography variant="header.nav">TELEGRAM</Typography>
        </Link>
      </Stack>
    </Toolbar>
  );
};

export default Header;
