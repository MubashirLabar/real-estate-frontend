const url = {
  baseUrl:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:5000/"
      : "https://real-estate-be.vercel.app/",
};
export { url };
