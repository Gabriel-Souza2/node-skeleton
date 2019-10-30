import express from "express";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";

import route from "./routes";
import database from "./config/database";

config({ path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env" });

const { MONGO_URI } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
database(MONGO_URI);
route(app);

export default app;
