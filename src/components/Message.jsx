import Alert from "@mui/material/Alert";
import { Stack } from "@mui/system";
function Message({ children }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">{children}</Alert>
    </Stack>
  );
}

export default Message;
