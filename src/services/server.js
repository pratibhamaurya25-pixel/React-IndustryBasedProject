import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(cors());
server.use(middlewares);

server.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

server.use(router);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${PORT}`);
});