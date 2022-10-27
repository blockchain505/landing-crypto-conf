import Cube from "@/components/Cube";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Button, Stack, Typography } from "@mui/material";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import React from "react";
import { Tweet } from "react-twitter-widgets";

import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RegisterButton from "@/components/RegisterButton";

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
            <RegisterButton />
            <Stack
              direction={{ ex: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Typography variant="sections.title">PRESENTADO POR</Typography>
              <Box mt="2rem" sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box
                  component="img"
                  src="https://services-project.s3.us-east-2.amazonaws.com/logo_sin_fondo.png"
                  alt="blockcain 505"
                  width={100}
                  height={100}
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
              DESEEN UTILIZAR TECNOLOGIAS BLOCKCHAIN EN SUS NEGOCIOS.BLOCKTECH
              ES PARA TODOS. TANTO PARA LOS QUE RECIEN COMIENZAN, COMO PARA LOS
              QUE HACEN TRADING, DESARROLLADORES E INVERSORES QUE DESEEN
              UTILIZAR TECNOLOGIAS BLOCKCHAIN EN SUS NEGOCIOS.
            </Typography>

            <RegisterButton />

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
            <Typography variant="sections.title">NO TE LO PERDAS!</Typography>

            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(3, 1fr)",
              }}
              gap={8}
              sx={{ marginTop: "3rem !important" }}
            >
              <Stack
                direction="row"
                color="common.white"
                spacing={3}
                sx={{ maxWidth: "20rem" }}
              >
                <ApartmentIcon sx={{ fontSize: "4.5rem" }} />
                <Box>
                  <Typography
                    sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Donde?
                  </Typography>
                  <Typography>
                    CENTRO DE CONVENCIONES DEL HOTEL CROWNE PLAZA
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                color="common.white"
                spacing={3}
                sx={{ maxWidth: "20rem" }}
              >
                <CalendarMonthIcon sx={{ fontSize: "4.5rem" }} />
                <Box>
                  <Typography
                    sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Cuando?
                  </Typography>
                  <Typography>SABADO 16 DE NOVIEMBRE</Typography>

                  <Typography>DE 9:00 A 1:00 PM</Typography>
                </Box>
              </Stack>
            </Box>
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

            <Link href="/donate">
              <Button variant="button.main">Donar</Button>
            </Link>
          </Stack>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
