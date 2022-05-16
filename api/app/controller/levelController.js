const level = require("../model/models/level");

async function allLevel(req, res) {
    const totuLesLevel = await level.getAllLevel();
    res.json(totuLesLevel);
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