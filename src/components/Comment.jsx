import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

function Comment(props) {
  const { comment } = props;
  const imgLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FTRJxwTh_default-profile-picture-transparent-hd-png-download%2F&psig=AOvVaw2ETxpnve4IlbWQWRTfNSLO&ust=1679506875276000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDCzeXI7f0CFQAAAAAdAAAAABAQ";

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>
            {comment.name} ({comment.email})
          </h4>
          <p style={{ textAlign: "left" }}>{comment.body}. </p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </>
  );
}

export default Comment;
