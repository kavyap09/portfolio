import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: "all"
  },
  preview:{
<<<<<<< HEAD
  allowedHosts:"all"
=======
    allowedHosts:"all"
>>>>>>> b4a3d9c (update2 vite)
  }
});
