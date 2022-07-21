import express from "express";
import * as trpc from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import cors from 'cors'

const appRouter = trpc.router().query("Hello", {
  resolve() {
    return "Hello world"
  }
});

export type AppRouter = typeof appRouter

const app = express();
const port = 8080;
app.use(cors())

app.use("/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  }))

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
