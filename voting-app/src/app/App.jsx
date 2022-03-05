import {ProductList} from "./components/ProductList";
import {CssBaseline, Container, Divider, Typography} from "@mui/material";
import {refreshToTop} from "refresh-to-top";
import "../assets/css/App.css";

export const App = () => {
    refreshToTop();

    return (
        <>
            <CssBaseline/>
            <Container>
                <Typography variant="h2" component="h2" align="center">Popular Products</Typography>
                <Divider/>
                <ProductList/>
            </Container>
        </>
    );
}