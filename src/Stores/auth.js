import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      event: null,
      setEvent: (event) => set({ event }),
      clearAuth: () => set({ event: null }),
    }),
    {
      name: "auth", // nome da chave de armazenamento persistente (por exemplo, localStorage)
    }
  )
);

export default useAuthStore;
