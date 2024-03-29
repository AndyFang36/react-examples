import "../assets/css/App.css";
import {Box, Container, CssBaseline, Divider, Typography} from "@mui/material";
import {TimerDashboard} from "./containers/TimerDashboard";
import {refreshToTop} from "refresh-to-top";

export const App = () => {
  refreshToTop();

  return (
    <Box component="main">
      <CssBaseline/>
      <Typography variant="h2" component="h2" align="center">Time Tracking App</Typography>
      <Divider sx={{margin: "1rem 0"}}/>
      <Container>
        <TimerDashboard/>
      </Container>
    </Box>
  );
};
