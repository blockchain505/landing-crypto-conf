import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Box } from "@mui/system";

interface Props {
  methodImage: string;
  methodWallet: string;
  copy: (arg: string) => void;
}

const DonateMethod = ({ methodImage, methodWallet, copy }: Props) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Avatar src={methodImage} />
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "0.3rem 1rem",
      }}
    >
      <Typography sx={{ wordBreak: "break-all" }}>{methodWallet}</Typography>
    </Box>

    <Tooltip title="copiar">
      <ContentPasteIcon
        onClick={() => copy(methodWallet)}
        sx={{
          color: "#fff",
          ":hover": {
            opacity: "80%",
            cursor: "pointer",
          },
        }}
      />
    </Tooltip>
  </Stack>
);

export default DonateMethod;
