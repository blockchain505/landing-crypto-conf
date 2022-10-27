import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@mui/material";

import DonateComponent from "@/components/Donate";

const Donate = () => {
  return (
    <Box sx={{ maxWidth: "1600px", margin: "0 auto", padding: "0rem 2rem" }}>
      <Header />
      <DonateComponent />
      <Footer />
    </Box>
  );
};

export default Donate;
