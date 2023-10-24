// Import DB
import pg from '../../../libs/pg/index.js';

// db query function
const queryFn = async body => {
	const { action, use_case } = body;
	try {
		const query = {
			text: `INSERT INTO story (id, action, use_case, status_code, created_at) VALUES ($1, $2, $3, $4, $5);`,
			values: [crypto.randomUUID(), action, use_case, 0, new Date()],
		};
		await pg.query(query);
		return { status: 200, success: true, message: 'successfully added story' };
	} catch (error) {
		const errMsg = 'unable to add story to db';
		console.error(error);
		console.info(errMsg);
		return { status: 503, success: false, message: errMsg };
	}
};

// export module addStory
export const addStory = async body => {
	return queryFn(body);
};
