import type { MetadataRoute } from "next"
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ufarms.io - Smart Irrigation & IoT Farming Solutions",
    short_name: "Ufarms.io",
    description:
      "Advanced sprinkler irrigation systems, lawn automation, IoT-enabled controls, and smart farming solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2E7D32",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
