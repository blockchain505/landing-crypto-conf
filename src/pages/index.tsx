import Cube from "@/components/Cube";
import { Box, Button, Link, Stack, Toolbar, Typography } from "@mui/material";

import type { NextPage } from "next";
import Head from "next/head";

import React from "react";
import { Tweet } from "react-twitter-widgets";

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
        <Box
          sx={{ maxWidth: "1600px", margin: "0 auto", padding: "0rem 2rem" }}
        >
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
                href="https://t.me/+kIpoL32xL8owOTJh
"
              >
                <Typography variant="header.nav">TELEGRAM</Typography>
              </Link>
            </Stack>
          </Toolbar>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={6}
            sx={{ margin: "2rem 0rem", minHeight: "634px" }}
          >
            <Cube />
            <Button variant="button.main">Registrarse</Button>
            <Box>
              <Typography variant="sections.title">PRESENTADO POR</Typography>
            </Box>
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={4}
            sx={{ minHeight: "634px" }}
          >
            <Typography variant="sections.title">PREPARATE</Typography>

            <Typography variant="body2">
              BLOCKTECH ES PARA TODOS. TANTO PARA LOS QUE RECIEN COMIENZAN, COMO
              PARA LOS QUE HACEN TRADING, DESARROLLADORES E INVERSORES QUE
              DESEEN UTILIZAR TECNOLOGIAS BLOCKCHAIN EN SUS NEGOCIOS.
            </Typography>

            <Button variant="button.main">Registrarse</Button>

            <Stack
              sx={{
                flexDirection: { ex: "column", sm: "row" },
                width: "100%",
                ">div": {
                  marginRight: { sm: "1rem" },
                },
              }}
            >
              <Tweet tweetId="1536113917528788993" />
              <Tweet tweetId="1580252250425131009" />
            </Stack>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{ minHeight: "634px" }}
          >
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"
              height={300}
              width={300}
            ></Box>
            <Typography variant="sections.title">APOYANOS</Typography>
            <Typography variant="body2">
              APOYANOS PARA CONTINUAR PROMOVIENDO EL USO DE BLOCKCHAIN EN
              NICARAGUA, POR UN MUNDO DESCENTRALIZADO
            </Typography>

            <Button variant="button.main">Donar</Button>
          </Stack>

          <Stack
            sx={{
              minHeight: "634px",
            }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Typography variant="sections.title">PRESENTADO POR</Typography>
            </Box>

            <Box>
              <Typography variant="sections.title">CON EL APOYO DE</Typography>
            </Box>
          </Stack>
        </Box>
      </main>
      <footer>
        <Box sx={{ marginTop: "auto" }}>
          <Typography variant="sections.title">
            This is the footer xd
          </Typography>
        </Box>
      </footer>
    </div>
  );
};

export default Home;
