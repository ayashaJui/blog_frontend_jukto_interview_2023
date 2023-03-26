import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPost } from "../actions/postAction";

function RandomPost({ postLength }) {
  const dispatch = useDispatch();

  const randomPostDetail = useSelector((state) => state.randomPostDetail);
  const { randomPost, loading } = randomPostDetail;

  React.useEffect(() => {
    dispatch(getRandomPost(postLength));
    setInterval(() => dispatch(getRandomPost(postLength)), 30000);
    // return () => clearInterval(timer);
  }, [dispatch, postLength]);

  return (
    !loading && (
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {randomPost.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {randomPost.body}
              </Typography>
              <Box sx={{ float: "right", mr: 5, my: 3 }}>
                <Button variant="contained" href={`/posts/${randomPost.id}`}>
                  Details
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    )
  );
}

export default RandomPost;
