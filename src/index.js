import express from 'express';
import router from './routes/router.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ready at: http://localhost:${PORT}`);
});