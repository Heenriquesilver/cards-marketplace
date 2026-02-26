export type TUser = {
  id: string;
  name: string;
  email: string;
};

export type TAuthState = {
  user: TUser | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (data: { user: TUser; token: string }) => void;
  logout: () => void;
};
