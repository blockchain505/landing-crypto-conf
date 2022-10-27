import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@mui/material";

import AboutComponent from "@/components/About";

const About = () => {
  return (
    <Box sx={{ maxWidth: "1600px", margin: "0 auto", padding: "0rem 2rem" }}>
      <Header />
      <AboutComponent />
      <Footer />
    </Box>
  );
};

export default About;
