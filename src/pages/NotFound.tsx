import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
}
