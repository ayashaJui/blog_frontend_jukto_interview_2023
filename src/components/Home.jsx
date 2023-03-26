import Post from "./Post";
import RandomPost from "./RandomPost";

import Grid from "@mui/material/Grid";
import TablePagination from "@mui/material/TablePagination";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage, setTotalPosts } from "../actions/paginationAction";
import Message from "./Message";

function Home() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.postList);

  const pagination = useSelector((state) => state.pagination);
  const { currentPage, postsPerPage, totalPosts } = pagination;

  const { success } = useSelector((state) => state.postDelete);

  useEffect(() => {
    dispatch(setTotalPosts(posts.length));
  }, [dispatch, posts.length]);

  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  const handleChangePage = (_, newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div>
      <RandomPost postLength={posts.length} />

      <Grid container justifyContent={"space-between"} sx={{ px: 3, py: 5 }}>
        <Grid item md={6}>
          <Typography component="h6" variant="h6">
            Total Posts | {posts.length}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Button
            variant="contained"
            sx={{ float: "right" }}
            href="#/posts/create"
          >
            Create
          </Button>
        </Grid>
      </Grid>
      {success && <Message>Post Deleted</Message>}
      <Grid container spacing={3} sx={{ px: 2 }}>
        {postsToDisplay.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>

      <Box sx={{ p: 5 }} mt={5}>
        <TablePagination
          rowsPerPageOptions={[6, 12]}
          component="div"
          count={totalPosts}
          rowsPerPage={postsPerPage}
          page={currentPage}
          onPageChange={handleChangePage}
        />
      </Box>
    </div>
  );
}
export default Home;
