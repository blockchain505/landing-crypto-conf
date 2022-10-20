import { Box } from "@mui/material";

const Cube = () => {
  return (
    <Box sx={{ height: "10rem", width: "10rem" }}>
      <div className="cube">
        <div className="sphere"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="side front"></div>
        <div className="side back"></div>
      </div>
    </Box>
  );
};

export default Cube;
