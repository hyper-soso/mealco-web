import { PRIVACY_HISTORY } from "@/constants";
import type { MetadataRoute } from "next";

const SITE_URL = "https://mealco.app";

const paths = [
  "",
  "/terms",
  `/privacy/${PRIVACY_HISTORY[0]}`,
  "/delete-my-account",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    (["ko", "en"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
      priority: path === "" ? 1 : 0.5,
      alternates: {
        languages: {
          ko: `${SITE_URL}/ko${path}`,
          en: `${SITE_URL}/en${path}`,
          "x-default": `${SITE_URL}${path || "/"}`,
        },
      },
    })),
  );
}
