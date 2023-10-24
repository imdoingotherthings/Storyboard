// Import DB
import pg from '../libs/pg/index.js';

// export database functions
export const createTables = async () => {
	try {
		const queryStoryTable = {
			text: `CREATE TABLE story (
                id UUID PRIMARY KEY NOT NULL,
                action TEXT NOT NULL,
                use_case TEXT NOT NULL,
                status_code INTEGER NOT NULL,
                created_at DATE NOT NULL
            );`,
		};
		await pg.query(queryStoryTable);
		console.log('successfully created tables...');
	} catch (error) {
		console.error(error);
		console.info('unable to create database tables');
	}
};

export const dropTables = async () => {
	try {
		const queryDropTables = {
			text: `DROP TABLE IF EXISTS story CASCADE;`,
		};
		await pg.query(queryDropTables);
		console.log('successfully dropped tables...');
	} catch (error) {
		console.error(error);
		console.info('unable to create database tables');
	}
};
