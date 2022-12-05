require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

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
  console.log("Listening on port 8000");
});
