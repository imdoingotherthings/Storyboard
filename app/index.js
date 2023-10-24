// Import Packages
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
	'origin': ['http://localhost:1234'],
	'methods': 'GET, PUT, PATCH, POST, DELETE',
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import Express Routes
import { router } from './routes/index.js';
app.use(router);

app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`);
});
