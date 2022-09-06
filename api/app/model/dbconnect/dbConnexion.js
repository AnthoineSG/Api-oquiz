import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.BD_HOST, // Host de la BDD
    port: process.env.BD_PORT, // Port de l'host
    user: process.env.BD_USER, // Nom de l'utilisateur de la BDD
    password: process.env.BD_PASSWORD, // MDP de cette utilisateur
    database: process.env.BD_DATABASE, // Nom de la database
    max: 20, // Nombre de connexion max
    idleTimeoutMillis: 2000, // Temps max d'inactiviter
    connectionTimeoutMillis: 2000, // Delai avant la coupure de connexion
});

pool.connect();

export default pool;

