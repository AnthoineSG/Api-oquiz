const dbconnect = require("../dbConnexion");

async function getAllLevel() {
    const query = {
        text: `SELECT * FROM "level";`
    };
    const result = await dbconnect.query(query);
    return result.rows;
}

async function getOneLevel(id) {
    const query = {
        text: `SELECT * FROM "level" WHERE "id" = $1;`,
        values: [id]
    };
    const result = await dbconnect.query(query);
    return result.rows;
}

module.exports = {
    getAllLevel,
    getOneLevel,
};