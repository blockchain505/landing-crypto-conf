import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import { Widget } from "@typeform/embed-react";

const Register = () => {
  return (
    <Box sx={{ maxWidth: "1600px", margin: "0 auto", padding: "0rem 2rem" }}>
      <Header />
      <Box sx={{ height: "80vh", paddingTop: "2rem"}}>
        <Widget style={{height: "100%"}} id="PslhHMyv" />;
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
