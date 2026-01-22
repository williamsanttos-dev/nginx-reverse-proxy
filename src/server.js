import http from "node:http";

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

async function main() {
  try {
    const server = http.createServer();
    server.on("request", async (req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ SERVER_HOST, SERVER_PORT }));
    });
    server.listen(SERVER_PORT);
  } catch (err) {
    console.error("Something went wrong...", err);
  }
}

main()
  .then(() => console.log(`Server started on ${SERVER_HOST}:${SERVER_PORT}!`))
  .catch((err) => console.error("Something went wrong...", err));
