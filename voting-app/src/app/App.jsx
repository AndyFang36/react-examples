import {ProductList} from "./ProductList";
import {CssBaseline, Container, Divider, Typography, Box, AppBar} from "@mui/material";
import {refreshToTop} from "refresh-to-top";
import Logo from "../logo.svg";
import "../assets/css/App.css";

export const App = () => {
  refreshToTop();

  return (
    <Box id="App">
      <CssBaseline/>
      <AppBar position="static" elevation={0} color="transparent">
        <Typography variant="h2" align="center">
          <img id="Logo" src={Logo} alt="logo"/> Popular Products
        </Typography>
      </AppBar>
      <Divider/>
      <main>
        <Container maxWidth="md">
          <ProductList/>
        </Container>
      </main>
      <footer>
        <Typography align="center">Copyright &copy; 2022-Now AndyFang36.</Typography>
      </footer>
    </Box>
  );
};
