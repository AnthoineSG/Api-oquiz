const dbconnect = require("../dbConnexion");

const quizModels = {

    async allQuiz() {
        const query = {
            text: `SELECT * FROM "quiz";`,
        };
        const result = await dbconnect.query(query);
        return result.rows;
    },


    async oneQuiz(id) {
        const query = {
            text: `SELECT * FROM "quiz" WHERE id = $1;`,
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },


    async createQuiz(title, description, userId) {
        const query = {
            text: `INSERT INTO "quiz"
            ("title", "description", "user_id" )
            VALUES
            ($1, $2, $3)
            RETURNING
            "id", "title", "description", "user_id", "created_at", "updated_at";`,
            values: [title, description, userId ],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async updateQuiz(id, title, description, userId) {
        const query = {
            text: `UPDATE "quiz" SET
            "title" = $1,
            "description" = $2,
            "user_id" = $3 
            WHERE
            "id" = $4
            RETURNING
            "id", "title", "description", "user_id", "created_at", "updated_at";`,
            values: [title, description, userId, id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async deleteQuiz(id) {
        const query = {
            text: `DELETE FROM "quiz" WHERE "id" = $1 RETURNING "id", "title", "description", "user_id", "created_at", "updated_at";`,
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },
};

module.exports = quizModels;