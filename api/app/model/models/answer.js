const dbconnect = require("../dbConnexion");

const answerModels = {

    async AllAnswer() {
        const query = {
            text: `SELECT * FROM "answer";`,
        };
        const result = await dbconnect.query(query);
        return result.rows;
    },


    async OneAnswer(id) {
        const query = {
            text: `SELECT * FROM "answer" WHERE id = $1;`,
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },


    async createAnswer(description, questionId) {
        const query = {
            text: `INSERT INTO "answer" ("description", "question_id") VALUES ($1, $2) RETURNING "id", "description", "question_id", "created_at", "updated_at";`,
            values: [description, questionId],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async updateAnswer(id, description, questionId) {
        const query = {
            text: `UPDATE "answer" SET "description" = $1, "question_id" = $2  WHERE "id" = $3 RETURNING "id", "description", "question_id", "created_at", "updated_at";`,
            values: [description, questionId, id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async deleteAnswer(id) {
        const query = {
            text: `DELETE FROM "answer" WHERE "id" = $1 RETURNING "id", "description", "question_id", "created_at", "updated_at";`,
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },
};

module.exports = answerModels;