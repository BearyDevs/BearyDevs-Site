export const ENV = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
  CV_URL: process.env.NEXT_PUBLIC_CV_URL || "",
  DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL || "",
};
