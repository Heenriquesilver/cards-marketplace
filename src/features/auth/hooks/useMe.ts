import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { useAuthStore } from "../../../store/authStore";

export const useMe = () => {
  const token = useAuthStore((state) => state.token);
  const setAuth = useAuthStore((state) => state.setAuth);
  const logout = useAuthStore((state) => state.logout);

  return useQuery({
    queryKey: ["me"],
    queryFn: authService.me,
    enabled: !!token,

    onSuccess: (user) => {
      setAuth({ user, token: token! });
    },

    onError: () => {
      logout();
    },
  });
};
