const level = require("../model/models/level");

const { error500 } = require("../middleware/errorMiddelware");

/**
 * Recupere tout les levels et verifie que tout va bien
 * @param {*} res Renvoie les levels sous format json
 */
async function allLevel(_, res) {
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
}

async function oneLevel(req, res) {
    const id = parseInt(req.params.id);
    const unLevel = await level.getOneLevel(id);
    res.json(unLevel);
}

async function createLevel(req, res) {
    const { name } = req.body;
    const newLevel = await level.createLevel(name);
    res.json(newLevel);
}

async function updateLevel(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const updateLevel = await level.updateLevel(name, id);
    res.json(updateLevel);
}

async function deleteLevel(req, res) {
    const { id } = req.params;
    const deleteLevel = await level.deleteLevel(id);
    res.json(deleteLevel);
}

module.exports = {
    allLevel,
    oneLevel,
    createLevel,
    updateLevel,
    deleteLevel,
};