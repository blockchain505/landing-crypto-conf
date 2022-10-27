import { Button, Box } from "@mui/material";

import Link from "next/link";

interface Props {
  width?: string;
}

const RegisterButton = ({ width = "18rem" }: Props) => {
  return (
    <Box>
      <Link href="/register">
        <Button sx={{ width: width }} variant="button.main">
          Registrarse
        </Button>
      </Link>
    </Box>
  );
};

export default RegisterButton;
