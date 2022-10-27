import { Box, Link, Stack, Toolbar, Typography } from "@mui/material";

const Social = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1600px",
          margin: "4rem auto 0",
        }}
      >
        <Toolbar>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            width="100%"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-start" }}
            spacing={{ xs: 6, sm: 10 }}
          >
            <Box
              sx={{
                order: { xs: 2, sm: 0 },
                marginTop: { xs: "2rem", sm: 0 },
              }}
            >
              <Typography variant="header.title">BLOCKTECH 2022</Typography>
              <Typography sx={{ color: "common.white", mt: "1rem" }}>
                © 2022 Blockchain Nicaragua. All Rights Reserved.{" "}
              </Typography>
            </Box>
            <Stack>
              <Typography variant="title">COMPARTIR</Typography>
              <Stack direction="column" spacing={2} mt={2}>
                <Link
                  href="https://twitter.com/share?url=https%3A%2F%2Fblocktechni.com&text=Asistire%20a%20la%20Blocktech%202022!!.%20Ayudemos%20a%20promover%20el%20uso%20de%20blockchain.%20Por%20un%20mundo%20descentralizado."
                  variant="share.social"
                  underline="hover"
                >
                  TWITTER
                </Link>
                <Link
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblocktechni.com"
                  variant="share.social"
                  underline="hover"
                >
                  FACEBOOK
                </Link>
                <Link
                  href="https://www.linkedin.com/sharing/share-offsite/?url=blocktechni.com"
                  variant="share.social"
                  underline="hover"
                >
                  LINKEDIN
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="title">SIGUENOS</Typography>
              <Stack direction="column" spacing={2} mt={2}>
                <Link
                  href="https://twitter.com/505Blockchain"
                  variant="share.social"
                  underline="hover"
                >
                  TWITTER
                </Link>
                <Link
                  href="https://www.facebook.com/blockchain505nic"
                  variant="share.social"
                  underline="hover"
                >
                  FACEBOOK
                </Link>
                <Link
                  href="https://www.linkedin.com/company/blockchain-nicaragua/"
                  variant="share.social"
                  underline="hover"
                >
                  LINKEDIN
                </Link>
                <Link
                  href="https://t.me/+kIpoL32xL8owOTJh"
                  variant="share.social"
                  underline="hover"
                >
                  TELEGRAM
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Social;
