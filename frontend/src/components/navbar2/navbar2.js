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

function NavBar2() {
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
                mx: 5,
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
                mx: 5,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/spiritspage"
            >
              Spirits
            </Button>
            <Button
              sx={{
                my: 4,
                mx: 5,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/cocktaillistpage"
            >
              Cocktails List
            </Button>
            <Button
              sx={{
                my: 4,
                mx: 5,
                color: "white",
                display: "block",
                fontFamily: "Courier",
                fontSize: 20,
              }}
              component="a"
              href="/ingredientsearchpage"
            >
              Search by Ingredient
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavBar2;
