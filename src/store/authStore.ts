import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setAuthToken } from "../services/api";

interface AuthState {
  token?: string | null;
  staff?: any | null;
  setAuth: (token: string | null, staff?: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      staff: null,
      setAuth: (token, staff) => {
        set({ token, staff });
        setAuthToken(token || undefined);
      },
      logout: () => {
        set({ token: null, staff: null });
        setAuthToken(undefined);
      },
    }),
    { name: "physio-auth" }
  )
);

export default useAuthStore;
