const level = require("../model/models/level");

async function allLevel(req, res) {
    const totuLesLevel = await level.getAllLevel();
    res.json(totuLesLevel);
}

module.exports = {
    allLevel,
};