import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/index.js";

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
