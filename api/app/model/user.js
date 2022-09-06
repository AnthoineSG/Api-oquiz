import dbconnect from "./dbconnect/dbConnexion.js";

const userModels = {
    async allUser() {
        const query = {
            text: "SELECT * FROM \"user\";",
        };
        const result = await dbconnect.query(query);
        return result.rows;
    },

    async oneUser(id) {
        const query = {
            text: "SELECT * FROM \"user\" WHERE id = $1;",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async createUser(email, password, firstname, lastname) {
        const query = {
            text: `INSERT INTO "user"
            ("email", "password", "firstname", "lastname")
            VALUES
            ($1, $2, $3, $4)
            RETURNING
            "id", "email", "password", "firstname", "lastname", "created_at", "updated_at";`,
            values: [email, password, firstname, lastname],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async updateUser(id, email, password, firstname, lastname) {
        const query = {
            text: `UPDATE "user" SET
            email = $1,
            password = $2,
            firstname = $3,
            lastname = $4
            WHERE "id" = $5
            RETURNING
            "id", "email", "password", "firstname", "lastname", "created_at", "updated_at";`,
            values: [email, password, firstname, lastname, id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },

    async deleteUser(id) {
        const query = {
            text: "DELETE FROM \"user\" WHERE \"id\" = $1 RETURNING \"id\", \"email\", \"password\", \"firstname\", \"lastname\", \"created_at\", \"updated_at\";",
            values: [id],
        };
        const result = await dbconnect.query(query);
        return result.rows[0];
    },
};

export default userModels;