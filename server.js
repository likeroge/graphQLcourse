const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const crypto = require("crypto");
const schema = require("./graphql/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.get("/", (req, res) => {
  res.json({ block1: "a", block2: "b", c: "cccsssccc" });
});

app.listen(5000, () => "Server is up");
