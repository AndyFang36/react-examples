import {Avatar, Box, Card, CardContent, CardMedia, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {number, string, func} from "prop-types";
import {ThumbUp} from "@mui/icons-material";

export const Product = (props) => {
  const {id, url, productImg, onVote, submitterAvatar, votes, description, title} = props;

  return (
    <Card className="product">
      <CardMedia component="img" sx={{width: "40%"}} image={productImg} alt="..."/>
      <CardContent sx={{width: "60%"}}>
        <Stack spacing={2} height="100%">
          <Toolbar disableGutters>
            <Typography>当前票数：<b style={{fontSize:"xx-large"}}>{votes}</b></Typography>
            <IconButton onClick={() => onVote(id)} color="success" size="large" title="投票">
              <ThumbUp fontSize="large"/>
            </IconButton>
          </Toolbar>
          <a href={url}>{title}</a>
          <Typography>{description}</Typography>
          <Box flexGrow={1} display="flex" alignItems="end">
            <span>Submitted by: </span>
            <Avatar src={submitterAvatar} alt="avatar"/>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

Product.propTypes = {
  id: number.isRequired,
  url: string.isRequired,
  productImg: string.isRequired,
  submitterAvatar: string.isRequired,
  votes: number.isRequired,
  description: string.isRequired,
  title: string.isRequired,
  onVote: func.isRequired,
};
