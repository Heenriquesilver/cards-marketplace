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
  CircularProgress,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
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
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 3 }}>
          <Typography variant="h5" mb={3} textAlign="center" fontWeight="bold">
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
              autoComplete="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              autoComplete="current-password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {isError && (
              <Alert severity="error">
                {error?.message || "Email ou senha inválidos"}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isPending}
              sx={{ height: 48 }}
            >
              {isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Entrar"
              )}
            </Button>
          </Box>

          <Typography textAlign="center" mt={3}>
            Não tem conta?{" "}
            <MuiLink component={Link} to="/register" underline="hover">
              Criar conta
            </MuiLink>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
