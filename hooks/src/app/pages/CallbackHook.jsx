import {useCallback, useEffect, useState} from "react";
import {Box, Button, CircularProgress, Divider, Stack, TextField, Typography} from "@mui/material";

const MyList = ({getItems}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setItems(getItems());
    setTimeout(() => setLoading(false), 1000);
  }, [getItems]);

  return (
    <Box id="MyList" border="2px dashed red" m="auto" width="50%" minHeight={150} mt={2} style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
      <Typography>Child Component</Typography>
      {loading ?
        <Typography align="center">
          <CircularProgress size={16} color="warning"/> Fetching items...
        </Typography>
        :
        items.map(item => <p key={item}>{item}</p>)
      }
    </Box>
  );
};

const Demo1 = () => {
  const [input, setInput] = useState(0);
  const [light, setLight] = useState(true);
  const getItems = () => {
    return [input + 10, input + 100];
  };
  const theme = {
    backgroundColor: light ? "ghostwhite" : "grey",
    color: light ? "grey" : "white"
  };

  return (
    <Box className="demo">
      <Typography variant="h5" pb={1}>📌 Without <code>useCallback</code></Typography>
      <Box style={theme} minHeight={200}>
        <Typography mb={2}>Parent Component</Typography>
        <TextField
          sx={{mr: 1}}
          type="number"
          label="Number"
          variant="outlined"
          size="small"
          value={input}
          onChange={e => setInput(parseInt(e.target.value))}
        />
        <Button onClick={() => setLight(prev => !prev)} variant="contained" disableElevation>
          Toggle Theme
        </Button>
        <MyList getItems={getItems}/>
      </Box>
    </Box>
  );
};

const Demo2 = () => {
  const [input, setInput] = useState(0);
  const [light, setLight] = useState(true);
  const getItems = useCallback(() => {
    return [input + 10, input + 100];
  }, [input]);
  const theme = {
    backgroundColor: light ? "ghostwhite" : "grey",
    color: light ? "grey" : "white"
  };

  return (
    <Box className="demo">
      <Typography variant="h5" pb={1}>📌 With <code>useCallback</code></Typography>
      <Box style={theme} minHeight={200}>
        <Typography mb={2}>Parent Component</Typography>
        <TextField
          sx={{mr: 1}}
          type="number"
          label="Number"
          variant="outlined"
          size="small"
          value={input}
          onChange={e => setInput(parseInt(e.target.value))}
        />
        <Button onClick={() => setLight(prev => !prev)} variant="contained" disableElevation>
          Toggle Theme
        </Button>
        <MyList getItems={getItems}/>
      </Box>
    </Box>
  );
};

export const CallbackHook = () => {
  return (
    <Box id="CallbackHook">
      <Typography paragraph>
        usecallback是将父组件传给子组件的方法给缓存下来，只有当 usecallback中的第二个参数状态变化时，子组件才重新渲染.<br/>
        Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
      </Typography>
      <Divider sx={{mt: 1, mb: 2}}/>
      <Stack spacing={5}>
        <Demo1/>
        <Demo2/>
      </Stack>
    </Box>
  );
};
