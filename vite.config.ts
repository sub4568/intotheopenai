import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

  return {
    base: '/',
    server: {
      host: "::",
      port: 5174,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(), 
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});