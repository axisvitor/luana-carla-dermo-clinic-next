import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luana Carla Dermo Clinic",
    short_name: "Luana Carla",
    description:
      "Pós-operatório assistido, estética corporal com continuidade e depilação a laser em Canaã dos Carajás.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4ef",
    theme_color: "#0f5f63",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
