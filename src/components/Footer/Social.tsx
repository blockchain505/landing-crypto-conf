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
                <Link variant="share.social" underline="hover">
                  TWITTER
                </Link>
                <Link variant="share.social" underline="hover">
                  FACEBOOK
                </Link>
                <Link variant="share.social" underline="hover">
                  LINKEDIN
                </Link>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="title">SIGUENOS</Typography>
              <Stack direction="column" spacing={2} mt={2}>
                <Link variant="share.social" underline="hover">
                  TWITTER
                </Link>
                <Link variant="share.social" underline="hover">
                  FACEBOOK
                </Link>
                <Link variant="share.social" underline="hover">
                  LINKEDIN
                </Link>
                <Link variant="share.social" underline="hover">
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
