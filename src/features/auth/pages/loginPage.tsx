import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Paper,
} from "@mui/material";

import { loginSchema, type LoginFormData } from "../../../schemas/authSchema";
import { useLogin } from "../hooks/useLogin";

export function LoginPage() {
  const { mutate, isPending, isError, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <Container maxWidth="sm">
      <Box height="100vh" display="flex" alignItems="center">
        <Paper sx={{ p: 4, width: "100%" }}>
          <Typography variant="h5" mb={3}>
            Login
          </Typography>

          <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {isError && (
              <Alert severity="error">Email ou senha inválidos</Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isPending}
            >
              {isPending ? "Entrando..." : "Entrar"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
