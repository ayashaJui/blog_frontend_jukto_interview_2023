import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

function Post(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="div">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.body}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={`#/posts/${post.id}`}
            >
              Details
            </Button>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
