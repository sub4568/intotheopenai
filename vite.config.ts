import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
<<<<<<< HEAD

base: mode === 'production' ? '/intotheopenai/' : '/',  server: {
=======
  base: mode === 'production' ? '/intotheopenai/' : '/',
  server: {
>>>>>>> github_deploy
    host: "::",
    port: 5174,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
