export const ENV = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",

  NODE_ENV: process.env.NODE_ENV || "development",

  UMAMI_SHARE_TOKEN: process.env.UMAMI_SHARE_TOKEN || "",
  UMAMI_URL: process.env.UMAMI_URL || "",
};
