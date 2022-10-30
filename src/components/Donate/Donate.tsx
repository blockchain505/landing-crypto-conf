import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import {
  BITCOIN_IMAGE,
  BITCOIN_PUBLIC_KEY,
  ETHEREUM_IMAGE,
  ETHEREUM_PUBLIC_KEY,
} from "@/config";
import { useCallback, useState } from "react";
import DonateMethod from "./DonateMethod";

const Donate = () => {
  const [openSuccessful, setOpenSuccessful] = useState(false);

  const copyToClickboard = useCallback((value: string): void => {
    navigator.clipboard.writeText(value);
    setOpenSuccessful(true);
  }, []);

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={4}
      sx={{ minHeight: "85vh", padding: "1rem 0 0" }}
    >
      <Snackbar
        open={openSuccessful}
        autoHideDuration={6000}
        onClose={() => setOpenSuccessful(false)}
      >
        <Alert
          onClose={() => setOpenSuccessful(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Direccion copiada
        </Alert>
      </Snackbar>
      <Typography variant="sections.title">DONAR</Typography>

      <Typography variant="body2">
        Blockchain Nicaragua esta comprometida con promover el uso de la
        tecnologia blockchain a nivel nacional: adopcion de criptomonedas,
        tokenizacion de arte, promover la web3 en desarrolladores. Ayudanos para
        continuar con el crecimiento de la comunidad.
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
        }}
        gap={8}
        sx={{ marginTop: "3rem !important" }}
      >
        <DonateMethod
          methodImage={ETHEREUM_IMAGE}
          methodWallet={ETHEREUM_PUBLIC_KEY}
          copy={copyToClickboard}
        />

        <DonateMethod
          methodImage={BITCOIN_IMAGE}
          methodWallet={BITCOIN_PUBLIC_KEY}
          copy={copyToClickboard}
        />

        <DonateMethod
          methodImage={BITCOIN_IMAGE}
          methodWallet={BITCOIN_PUBLIC_KEY}
          copy={copyToClickboard}
        />
      </Box>
    </Stack>
  );
};

export default Donate;
