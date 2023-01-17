const url = {
  baseUrl:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:5000/"
      : "https://vercel.com/mubashirlabar/real-estate-backend/8Ec2cUMwr6npcUVU1fVhBCxFeuP6/",
};
export { url };
