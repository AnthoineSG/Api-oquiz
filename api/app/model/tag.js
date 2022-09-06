import dbconnect from "./dbconnect/dbConnexion.js";

const tagModels = {
    async AllTags() {
        const query = {
            text: "SELECT * FROM \"tag\";",
        };
        const result = await dbconnect.query(query);
        return result.rows;
    },

    async OneTag(id) {
        const query = {
            text: "SELECT * FROM \"tag\" WHERE id = $1;",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async createTag(tagName) {
        const query = {
            text: "INSERT INTO \"tag\" (\"name\") VALUES ($1) RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
            values: [tagName],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async updateTag(id, tagName) {
        const query = {
            text: "UPDATE \"tag\" SET \"name\" = $1 WHERE \"id\" = $2 RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
            values: [tagName, id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async deleteTag(id) {
        const query = {
            text: "DELETE FROM \"tag\" WHERE \"id\" = $1 RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },
};

export default tagModels;
