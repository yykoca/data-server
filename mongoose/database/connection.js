import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const HOST = "localhost";
const PORT = "27017";

const USER = "root";
const PASS = "example";

const DATABASE = "mongoose";

mongoose.connect(
	`mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE}`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		auth: { authSource: "admin" }
	}
);

const db = mongoose.connection;

db.on('error', (err) => { console.error('connection error:', err) });

export default db;
