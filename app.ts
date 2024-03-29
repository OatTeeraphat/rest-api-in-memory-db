import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./infra/api/controllers/TodoController";

import { errorHandler } from "./shared/middleware/errorHandler";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", todoRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
