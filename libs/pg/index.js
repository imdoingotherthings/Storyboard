// Import Packages
import 'dotenv/config';
import pg from 'pg';

// Destructure DB
const { Client } = pg;

// create new client from env string
const db = new Client({ connectionString: process.env.PG_URI });

// create a db connection. if cant connect, throw error
try {
	await db.connect();
} catch (error) {
	console.error(error);
	console.log({ message: 'unable to connect to database' });
	throw error;
}

// export the new client
export default db;
