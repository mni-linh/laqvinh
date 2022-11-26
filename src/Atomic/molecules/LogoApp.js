import { Box } from "@mui/system";
import React from "react";
import ImageLogo from "../atoms/ImageLogo";

const LogoApp = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        {/* Icon (màn hình lớn) */}
        <ImageLogo
          alt="logo"
          src="/images/logoApp.png"
          sx={{
            display: {
              xs: "flex",
              md: "flex",
            },
            alignSelf: "center",
          }}
        />
      </Box>
    </div>
  );
};

export default LogoApp;
