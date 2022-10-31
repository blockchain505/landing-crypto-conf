import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RegisterButton from "../RegisterButton";

const About = () => {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={4}
      sx={{ minHeight: "85vh", padding: "1rem 0 0" }}
    >
      <Typography variant="sections.title">A CERCA DE</Typography>

      <Typography variant="body2">
        BLOCKTECH ES UN EVENTO ANUAL PRESENCIAL ORGANIZADO POR BLOCKCHAIN
        NICARAGUA. SE HACE CON EL OBJETIVO DE PROMOVER EL USO DE TECNOLOGIAS
        BLOCKCHAIN EN EL PAIS, COMO UNA ALTERNATIVAS DESCENTRALIZADA A UN MUNDO
        MEJOR.
      </Typography>

      <Typography variant="body2">
        EL OBJETIVO PRINCIPAL DE ESTE AÑO ES MOSTRAR EL ESTADO DE ADOPCION DE
        TECNOLOGIAS BLOCKCHAIN EN EL PAIS HASTA EL MOMENTO, LOS AVANCES QUE LAS
        PERSONAS HAN PODIDO LOGRAR DE MANERA INDEPENDIENTE, Y PROMOVER EL USO DE
        TECNOLOGIAS BLOCKCHAIN PARA SOLUCION DE PROBLEMAS COTIDIANOS.
      </Typography>

      <Typography variant="sections.title">BLOCKTECH TE PERMITIRA</Typography>

      <Typography variant="body2">
        Aprender: Aprenderas sobre criptomonedas, blockchain, finanzas
        personales, desarollo de apps de logistica y trabajo remoto.
      </Typography>

      <Typography variant="body2">
        CREAR CONEXIONES: Cualquiera que sea tu perfil profesional estamos
        seguros que el networking del evento te ayudara a crear relaciones que
        contribuiran a tu futuro profesional.
      </Typography>

      <Typography variant="sections.title">PRESENTADORES</Typography>
      <Typography variant="body2">
        INVITAMOS A UN TALENTOSO GRUPO DE PONIENTES, TODOS SON REFERENCIAS EN
        SUS DISTINTOS CAMPOS A NIVEL NACIONAL E INTERNACIONAL.
      </Typography>

      <Box
        display="flex"
        gap={5}
        sx={{
          marginTop: "3rem !important",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
          <Card sx={{ maxWidth: 345, width: "20rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://services-project.s3.us-east-2.amazonaws.com/Adriana+Gonz%C3%A1lez+Tizo-min.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ADRIANA GONZALEZ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                TECNOLOGIA Y LOGISTICA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                TIZO APP
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, width: "20rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://services-project.s3.us-east-2.amazonaws.com/Luis+Mej%C3%ADa.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LUIS MEJIA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DESARROLLADOR BACKEND SENIOR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PROMOVER TRABAJO REMOTO
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, width: "20rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://services-project.s3.us-east-2.amazonaws.com/Elaine+Plata+con+pl%C3%A1tica.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ELAINE MIRANDA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FINANZAS PERSONALES
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PLATA CON PLATICA
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
          <Card sx={{ maxWidth: 345, width: "20rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://services-project.s3.us-east-2.amazonaws.com/Pedro+Guill%C3%A9n+Coincaex.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JOSE LUIS GUILLEN
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PRESIDENTE DE COINCAEX
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, width: "20rem" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://services-project.s3.us-east-2.amazonaws.com/Alejandro+Arana+Blockchain+Nicaragua.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ALEJANDRO ARANA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FUNDADOR DE BLOCKCHAIN NICARAGUA
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <Typography variant="sections.title">UBICACION FISICA</Typography>

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
            <Typography sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
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
            <Typography sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Cuando?
            </Typography>
            <Typography>SABADO 19 DE NOVIEMBRE</Typography>

            <Typography>DE 9:00 A 1:00 PM</Typography>
          </Box>
        </Stack>
      </Box>

      <RegisterButton />
    </Stack>
  );
};

export default About;
