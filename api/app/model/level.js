import dbconnect from "./dbconnect/dbConnexion.js";

const levelModels = {
    /**
     * Recupere tout les levels
     * @returns Retourne une erreur
     */
    async getAllLevel() {
        try {
            const query = {
                text: "SELECT * FROM \"level\";"
            };
            const result = await dbconnect.query(query);
            return result.rows;
        } catch (error) {
            return error;
        }
    },

    /**
     * Recupere un level en fonction d'un id
     * @returns Retourne une erreur
     */
    async getOneLevel(id) {
        try {
            const query = {
                text: "SELECT * FROM \"level\" WHERE \"id\" = $1 LIMIT 1;",
                values: [id]
            };
            const result = await dbconnect.query(query);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },

    /**
     * Cree un level en BDD
     * @returns Retourne une erreur
     */
    async createLevel(name) {
        try {
            const query = {
                text: "INSERT INTO \"level\" (\"name\") VALUES ($1) RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
                values: [name]
            };
            const result = await dbconnect.query(query);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },

    /**
     * Modifie un level en fonction de sont id
     * @returns Retourne une erreur
     */
    async updateLevel(name, id) {
        try {
            const query = {
                text: "UPDATE \"level\" SET \"name\" = $1 WHERE \"id\" = $2 RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
                values: [name, id]
            };
            const result = await dbconnect.query(query);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },

    /**
     * Supprime un level en BDD
     * @returns Retourne une erreur
     */
    async deleteLevel(id) {
        try {
            const query = {
                text: "DELETE FROM \"level\" WHERE \"id\" = $1 RETURNING \"id\", \"name\", \"created_at\", \"updated_at\";",
                values: [id]
            };
            const result = await dbconnect.query(query);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    }
};

export default levelModels;