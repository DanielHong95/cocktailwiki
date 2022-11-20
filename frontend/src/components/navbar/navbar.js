// import dependencies
import * as React from "react";
import Logo from "../../images/logo_final.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "black",
    },
  },
});

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box
            sx={{
              bgcolor: "background.paper",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={Logo} alt="" width="400" height="100" />
            <Button
              sx={{
                my: 4,
                marginLeft: 10,
                marginRight: 2,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/"
            >
              Home
            </Button>
            <Button
              sx={{
                my: 4,
                mx: 2,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/spirits"
            >
              Spirits
            </Button>
            <Button
              sx={{
                my: 4,
                mx: 2,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/cocktaillist"
            >
              Cocktails List
            </Button>
            <Button
              sx={{
                my: 4,
                mx: 2,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/searchbyingredient"
            >
              Search by Ingredient
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;
