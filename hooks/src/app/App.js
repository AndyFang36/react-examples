import {AppBar, Box, Container, CssBaseline, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Drafts, Inbox} from "@mui/icons-material";
import {EffectHook} from "./pages/EffectHook";
import {CallbackHook} from "./pages/CallbackHook";
import {MemoHook} from "./pages/MemoHook";
import "../App.css";

export const App = () => {
  return (
    <Box id="App">
      <CssBaseline/>
      <BrowserRouter>
        <AppBar id="Header" position="static" elevation={0} color="transparent">
          <Toolbar>
            <Typography width="100%" align="center" variant="h1">React Hooks Examples</Typography>
          </Toolbar>
        </AppBar>
        <Divider/>
        <Box id="Main" component="main" minHeight="80vh">
          <Container maxWidth="xl">
            <Grid container spacing={0}>
              <Grid item xl={3} p={2} id="Nav" component="nav">
                <List style={{backgroundColor:"papayawhip", borderRadius:"0.5rem"}}>
                  <ListItem>
                    <NavLink to="/useEffect">
                      <ListItemButton>
                        <ListItemIcon><Inbox fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useEffect"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useMemo">
                      <ListItemButton>
                        <ListItemIcon><Drafts fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useMemo"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useCallback">
                      <ListItemButton>
                        <ListItemIcon><Drafts fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useCallback"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xl={9} p={2} id="Content">
                <Routes>
                  <Route path="useEffect" element={<EffectHook/>}/>
                  <Route path="useMemo" element={<MemoHook/>}/>
                  <Route path="useCallback" element={<CallbackHook/>}/>
                </Routes>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider/>
        <Box id="Footer" component="footer">
          <Typography align="center">Copyright &copy; 2022 AndyFang36</Typography>
        </Box>
      </BrowserRouter>
    </Box>
  );
};
