// Import DB Utils
import { createTables, dropTables } from './db.js';

(async () => {
	await dropTables();
	await createTables();
	process.exit(0);
})();
