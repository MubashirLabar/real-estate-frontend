const url = {
  baseUrl:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:5001/"
      : "https://real-estate-be.vercel.app/",
};
export { url };
