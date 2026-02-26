import { Box, Button, Container, Typography } from "@mui/material";
import { useLogin } from "./features/auth/hooks/useLogin";

export default function App() {
  const { mutate, isPending } = useLogin();

  const handleLogin = () => {
    mutate({
      email: "example@test.com",
      password: "123456",
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Typography variant="h4">Cards Marketplace</Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          disabled={isPending}
        >
          {isPending ? "Entrando..." : "Login teste"}
        </Button>
      </Box>
    </Container>
  );
}
