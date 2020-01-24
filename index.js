const express = require("express");
const server = express();
const logger = require("./middleware/logger");
const welcomeRouter = require("./routers/welcome");
const userRouter = require("./users/userRouter");

server.use(logger());

server.use(express.json());

const host = process.env.HOST || "http://127.0.0.1";
const port = process.env.PORT || 4000;

server.use("/", welcomeRouter);
server.use("/users", userRouter);

server.listen(port, () => {
    console.log(`\n*** Server is listening on ${host}:${port}`);
})