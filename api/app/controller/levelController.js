import level from "../model/models/level.js";
import { error500 } from "../middleware/errorMiddelware.js";

const levelController = {
    /**
     * Recupere tout les levels et verifie que tout va bien
     * @param {*} res Renvoie les levels sous format json
     */
    async allLevel(_, res) {
        try {
            const totuLesLevel = await level.getAllLevel();
            if (!totuLesLevel) {
                throw Error("Probleme au niveau du datamapper");
            }
            if (totuLesLevel.message) {
                throw Error("Il y a un probleme quelque part");
            }

            res.json(totuLesLevel);
        } catch (error) {
            error500(error, res);
        }
    },

    /**
     * Recupere l'id en parametre pour renvoyer le level corespondant
     * @param {*} req recupere l'id
     * @param {*} res renvoie le resultat en json
     */
    async oneLevel(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                throw Error("Un id est un numero !");
            }

            const unLevel = await level.getOneLevel(id);
            if (!unLevel) {
                throw Error(`Le level n°${id} n'est pas connu`);
            }

            res.json(unLevel);
        } catch (error) {
            error500(error, res);
        }
    },

    /**
     * Permet la creation d'un nouveau level grace a un formulaire
     * @param {*} req recupere le formuaire
     * @param {*} res renvoie le resultat en json
     */
    async createLevel(req, res) {
        try {
            const { name } = req.body;
            if (!name) {
                throw Error("Probleme au niveau du formulaire");
            }

            const newLevel = await level.createLevel(name);
            if (!newLevel) {
                throw Error("Il y a un probleme quelque part");
            }

            res.json(newLevel);
        } catch (error) {
            error500(error, res);
        }
    },

    /**
     * Permet la mise a jour d'un level
     * @param {*} req recupere le parametre et le formulaire
     * @param {*} res renvoie le resultat en json
     */
    async updateLevel(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                throw Error("Un id est un numero !");
            }
            const { name } = req.body;
            if (!name) {
                throw Error("Probleme au niveau du formulaire");
            }
            const updateLevel = await level.updateLevel(name, id);
            if (!updateLevel) {
                throw Error("Il y a un probleme quelque part");
            }

            res.json(updateLevel);
        } catch (error) {
            error500(error, res);
        }
    },

    /**
     * Permet la suppresion d'un level
     * @param {*} req recupere l'id du level a supprimer
     * @param {*} res renvoie le resultat en json
     */
    async deleteLevel(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (!id) {
                throw Error("Un id est un numero !");
            }
            const deleteLevel = await level.deleteLevel(id);
            if (!deleteLevel) {
                throw Error("Il y a un probleme quelque part");
            }

            res.json(deleteLevel);
        } catch (error) {
            error500(error, res);
        }
    },
};

export default levelController;
