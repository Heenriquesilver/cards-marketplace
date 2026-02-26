import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function AppLayout() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Cards Marketplace</Typography>

          <Button color="inherit" onClick={logout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      <Box p={3}>
        <Outlet />
      </Box>
    </>
  );
}
