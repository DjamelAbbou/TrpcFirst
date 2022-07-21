import express from "express";
import * as trpc from "@trpc/server"
import { resolveHTTPResponse } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express"

const appRouter = trpc.router().query("Hello", {
  resolve() {
    return "Hello world"
  }
});

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
