import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostById, updatePost } from "../actions/postAction";
import { useNavigate, useParams } from "react-router-dom";
import Message from "./Message";

const theme = createTheme();

export default function CreatePost() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const url = window.location.pathname;
  const { id } = useParams();

  const postCreate = useSelector((state) => state.postCreate);
  const { success } = postCreate;

  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  const postUpdate = useSelector((state) => state.postUpdate);
  const { success: updateSuccess } = postUpdate;

  React.useEffect(() => {
    if (url.includes("edit")) {
      dispatch(getPostById(id));
    }
  }, [dispatch, history, id, url, success, updateSuccess]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (url.includes("edit")) {
      const data = {
        title: formData.get("title"),
        body: formData.get("body"),
        userId: post.userId,
        id: id,
      };

      dispatch(updatePost(data, id));
    } else {
      const data = {
        title: formData.get("title"),
        body: formData.get("body"),
        userId: Math.floor(Math.random() * 10) + 1,
      };

      dispatch(createPost(data));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {success || updateSuccess ? (
            <Message>Post {updateSuccess ? "Updated" : "Created"}</Message>
          ) : (
            ""
          )}
          <Typography component="h1" variant="h5">
            {url.includes("create") ? "Create a Post" : "Update Post"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="body"
              label="Description"
              type="body"
              id="body"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {url.includes("create") ? "Create" : "Update"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
