import { Box, Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4 }}>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
}
