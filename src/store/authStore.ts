import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setAuthToken } from "../services/api";

interface AuthState {
  token?: string | null;
  email?: string | null;
  userRole: string | null;
  setAuth: (token: string | null, email: string, userRole: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      userRole: null,
      setAuth: (token, email, userRole) => {
        set({ token, email, userRole });
        setAuthToken(token || undefined);
      },
      logout: () => {
        set({ token: null, email: null, userRole: null });
        setAuthToken(undefined);
      },
    }),
    { name: "physio-auth" }
  )
);

export default useAuthStore;
