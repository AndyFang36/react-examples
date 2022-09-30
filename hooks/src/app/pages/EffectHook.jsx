import {Box, Typography} from "@mui/material";

export const EffectHook = () => {
  return(
    <Box id="EffectHook">
      <Typography>
        useEffect
        useEffect有两个参数，第一个参数是回调函数，第二个参数是一个数组，这个数组接受当前函数中的state，若第二个参数状态变化时，则执行回调函数；
        useEffect只对当前函数中的状态更新有效；
      </Typography>
    </Box>
  )
}
