import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import type { NextPage } from "next";
import Head from "next/head";

import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BLOCKTECH 2022</title>
        <meta
          name="blocktech 2022"
          content="Landing page for the blocktech 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <Toolbar>
            <Typography variant="header.title">BLOCKTECH 2022</Typography>
            <Stack direction="row" sx={{ ml: "auto" }} spacing={4}>
              <Typography>PARTICIPACIONA</Typography>
              <Typography>DONAR</Typography>
              <Typography>A CERCA DE</Typography>
              <Typography>TELEGRAM</Typography>
            </Stack>
          </Toolbar>
        </Box>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
