import { Box, Stack, Typography } from "@mui/material";

const Sponsors = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap", minHeight: "540px" }}
      >
        <Stack
          sx={{ width: "100%" }}
          marginBottom="2.5rem"
          alignItems="center"
          justifyContent="center"
          spacing={6}
        >
          <Typography variant="sections.title">PRESENTADO POR</Typography>
          <Stack direction="row" alignItems="flex-end" spacing={10}>
            <Box
              component="img"
              src="/blockchain_nica.jpg"
              alt="blockcain 505"
              width={80}
              height={80}
            />
            <Box
              component="img"
              src="/coincaex.png"
              alt="coincaex"
              width={100}
              height={80}
            />
          </Stack>
        </Stack>
        <Stack
          sx={{ width: "100%" }}
          marginBottom="2.5rem"
          alignItems="center"
          justifyContent="center"
          spacing={6}
        >
          <Typography variant="sections.title">CON EL APOYO DE</Typography>
          <Stack direction="row" alignItems="flex-end" spacing={10}>
            <Box
              component="img"
              src="/blockchain_nica.jpg"
              alt="blockcain 505"
              width={80}
              height={80}
            />
            <Box
              component="img"
              src="/coincaex.png"
              alt="coincaex"
              width={100}
              height={80}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sponsors;
