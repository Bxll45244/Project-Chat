import { create } from "zustand";
import api from "../services/api.js"



export const useAuthStone = create((set, get) => ({
    checkAuth: async () => {
        const res = await api.get("/auth/")
    }
}))