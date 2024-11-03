import express from "express";
import pino from "pino";
import cors from "cors";

import 'dotenv/config';
/** https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file */
import job_data from "./jobs.json" with { type: "json" };

const port = process.env.PORT || 1000;
const app = express();
const logger = pino();

const corsOptions = {
    origin: '*'
};

/**
 * Use the express.json() and express.urlencoded() middleware
 * @reference https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));

app.get("/job", (req, resp) => {
    return resp.status(200).json(job_data);
});

app.listen(port, () => {
    logger.info(`JoBoards endpoints active. Listening on port ${port}`);
});