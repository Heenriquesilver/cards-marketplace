import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { useAuthStore } from "../../../store/authStore";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: authService.login,

    onSuccess: ({ token, user }) => {
      setAuth({ token, user });
    },
  });
};
