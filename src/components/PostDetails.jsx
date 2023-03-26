import * as React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

import { createComment, getPostComments } from "../actions/commentAction";
import Comment from "./Comment";
import { getUserById } from "../actions/userAction";
import { deletePostById, getPostById } from "../actions/postAction";
import Message from "./Message";

function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let history = useNavigate();

  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;
  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading } = userDetails;
  const postComments = useSelector((state) => state.postComments);
  const { comments } = postComments;
  const { success } = useSelector((state) => state.commentCreate);

  React.useEffect(() => {
    dispatch(getPostById(id));

    if (post.userId) {
      dispatch(getUserById(post.userId));
    }
    dispatch(getPostComments(id));
  }, [dispatch, post.userId, id]);

  const deletePosthandler = (id) => {
    window.confirm("Are you sure??");
    dispatch(deletePostById(id));
    history("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      comment: formData.get("comment"),
      postId: id,
    };
    dispatch(createComment(data));
  };

  return (
    <Box sx={{ minWidth: 275, p: 3 }}>
      {!loading && (
        <Card variant="">
          <CardContent>
            <Typography variant="h4" component="div" sx={{ py: 2 }}>
              {post.title}
            </Typography>
            <Typography sx={{ mb: 2.5 }} color="text.secondary">
              by {user.name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {post.body}
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              sx={{ my: 3, mr: 2 }}
              href={`#/posts/${post.id}/edit`}
            >
              Edit
            </Button>
            <Button
              color="error"
              variant="contained"
              sx={{ my: 3, ml: 2 }}
              onClick={deletePosthandler}
            >
              Delete
            </Button>
            {/* <Divider sx={{ my: 5 }} /> */}
            <div style={{ padding: 14 }} className="App">
              <h3>Comments</h3>
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  id="name"
                  label="Name......"
                  name="name"
                  sx={{ mr: 4 }}
                />
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Email..."
                  name="email"
                  sx={{ mr: 4 }}
                />
                <TextField
                  margin="normal"
                  required
                  id="comment_body"
                  label="Post a comment......"
                  name="comment"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Post
                </Button>
              </Box>
              {success && <Message>Comment Added</Message>}
              <Paper style={{ padding: "40px 20px" }}>
                {comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </Paper>
            </div>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default PostDetails;
