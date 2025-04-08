import app from "./src/app.js";
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server connected http://localhost:${port}`);
});
