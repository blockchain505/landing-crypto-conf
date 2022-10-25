import Cube from "@/components/Cube";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
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
          <Header />
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={10}
            sx={{ margin: "2rem 0rem", minHeight: "85vh" }}
          >
            <Cube />
            <Button variant="button.main">Registrarse</Button>
            <Stack
              direction={{ ex: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Typography variant="sections.title">PRESENTADO POR</Typography>
              <Box mt="2rem">
                <Box
                  component="img"
                  src="/blockchain_nica.jpg"
                  alt="blockcain 505"
                  width={80}
                  height={80}
                  mr="2rem"
                />
                <Box
                  component="img"
                  src="/coincaex.png"
                  alt="coincaex"
                  width={100}
                  height={80}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={4}
            sx={{ minHeight: "85vh" }}
          >
            <Typography variant="sections.title">PREPARATE</Typography>

            <Typography variant="body2">
              BLOCKTECH ES PARA TODOS. TANTO PARA LOS QUE RECIEN COMIENZAN, COMO
              PARA LOS QUE HACEN TRADING, DESARROLLADORES E INVERSORES QUE
              DESEEN UTILIZAR TECNOLOGIAS BLOCKCHAIN EN SUS NEGOCIOS. CON LA
              PARTICIPACION DE GRANDES PERSONAJES DEL MUNDO BLOCKCHAIN E
              INTERNET DE LA REGION.
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
            alignItems="flex-start"
            justifyContent="center"
            spacing={4}
            sx={{ minHeight: "85vh" }}
          >
            <Typography variant="sections.title">PARTICIPACIÓN</Typography>

	    <Typography variant="body2">
		
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
            sx={{ minHeight: "85vh" }}
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
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
