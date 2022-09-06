import pkg from "pg";
const { Client } = pkg;

const client = new Client(process.env.DB_URL);

client.connect();

export default client;