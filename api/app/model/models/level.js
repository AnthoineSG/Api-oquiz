const client = require("../dbConnexion");

async function getAllLevel() {
    const query = {
        text: `SELECT * FROM "level";`
    };
    const result = await client.query(query);
    return result.rows;
}

module.exports = {
    getAllLevel,
};