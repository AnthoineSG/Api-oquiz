import dbconnect from "../dbConnexion.js";

const questionModels = {
    async AllQuestion() {
        const query = {
            text: "SELECT * FROM \"question\";",
        };
        const result = await dbconnect.query(query);
        return result.rows;
    },

    async OneQuestion(id) {
        const query = {
            text: "SELECT * FROM \"question\" WHERE id = $1;",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async createQuestion(question, anecdote, wiki, levelId, answerId, quizId) {
        const query = {
            text: `INSERT INTO "question"
            ("question", "anecdote", "wiki", "level_id", "answer_id", "quiz_id")
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING
            "id", "question", "anecdote", "wiki", "level_id", "answer_id", "quiz_id", "created_at", "updated_at";`,
            values: [question, anecdote, wiki, levelId, answerId, quizId],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async updateQuestion(id, question, anecdote, wiki, levelId, answerId, quizId) {
        const query = {
            text: `UPDATE "question" SET
            "question" = $1,
            "anecdote" = $2,
            "wiki" = $3,
            "level_id" = $4,
            "answer_id" = $5,
            "quiz_id" = $6
            WHERE "id" = $7
            RETURNING "id", "question", "anecdote", "wiki", "level_id", "answer_id", "quiz_id", "created_at", "updated_at";`,
            values: [question, anecdote, wiki, levelId, answerId, quizId, id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async deleteQuestion(id) {
        const query = {
            text: "DELETE FROM \"question\" WHERE \"id\" = $1 RETURNING \"id\", \"question\", \"anecdote\", \"wiki\", \"level_id\", \"answer_id\", \"quiz_id\", \"created_at\", \"updated_at\";",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },
};

export default questionModels;