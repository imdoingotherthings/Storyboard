// Import Packages
import { Router } from 'express';

// Import Modules
import { addStory } from '../modules/AddStory/index.js';

// export the router
export const router = Router();

// routes to export
router.get('/app/', async (req, res) => {
	return res.status(200).json({ message: 'Welcome to the API' });
});

router.post('/app/add-story', async (req, res) => {
	const dbResponse = await addStory(req.body);

	return res.status(dbResponse.status).json(dbResponse);
});
