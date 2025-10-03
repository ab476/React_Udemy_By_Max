import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import { Container, Box, Toolbar } from "@mui/material";

export default function RootLayout() {
  return (
    <>
      {/* Top Navigation */}
      <MainNavigation />

      {/* Page Content */}
      <Container maxWidth="lg">
        {/* Toolbar adds spacing below AppBar height */}
        <Toolbar />
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
