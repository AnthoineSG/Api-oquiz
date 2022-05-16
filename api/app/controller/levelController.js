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

module.exports = {
    allLevel,
    oneLevel,
};