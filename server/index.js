import cors from "cors";
import express from "express";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // This should match the domain you are making the request from, adjust accordingly
  })
);

// Enable preflight requests handling for all routes
app.options("*", cors());

app.get("/some-route", (req, res) => {
  res.json({ message: "This route is CORS-enabled" });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
