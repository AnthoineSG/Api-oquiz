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

async function createLevel(name) {
    const query = {
        text: `INSERT INTO "level" ("name") VALUES ($1) RETURNING "id", "name", "created_at", "updated_at";`,
        values: [name]
    };
    const result = await dbconnect.query(query);
    return result.rows;
}

async function updateLevel(name, id) {
    const query = {
        text: `UPDATE "level" SET "name" = $1 WHERE "id" = $2 RETURNING "id", "name", "created_at", "updated_at";`,
        values: [name, id]
    };
    const result = await dbconnect.query(query);
    return result.rows;
}

async function deleteLevel(id) {
    const query = {
        text: `DELETE FROM "level" WHERE "id" = $1 RETURNING "id", "name", "created_at", "updated_at";`,
        values: [id]
    };
    const result = await dbconnect.query(query);
    return result.rows;
}

module.exports = {
    getAllLevel,
    getOneLevel,
    createLevel,
    updateLevel,
    deleteLevel,
};