import jsonServer from "json-server";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const server = jsonServer.create();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = jsonServer.router(
  path.join(__dirname, "db.json")
);

const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(router);

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`🚀 JSON Server running on port ${PORT}`);
});