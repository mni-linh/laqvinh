import { Toolbar } from "@mui/material";
import React from "react";
import LogoApp from "../molecules/LogoApp";

const AppBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={1}
        open={open}
        sx={{
          background: "rgba(32, 29, 28, 0.8)",
          backgroundSize: "cover",
        }}
          >
              <Toolbar>
                  <LogoApp/>
              </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBar;
