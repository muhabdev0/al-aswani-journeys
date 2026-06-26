import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // 👈 1. Add this import at the top

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR...)
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro({ preset: "vercel" }) // 👈 2. Add the Nitro plugin explicitly for Vercel
    ],
  },
});
