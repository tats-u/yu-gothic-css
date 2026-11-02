// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/yu-gothic-css/",
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
