// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Inter Variable",
      cssVariable: "--font-inter",
      provider: fontProviders.npm({ remote: false }),
      options: {
        package: "@fontsource-variable/inter",
      },
    },
  ],
});
