const userModels = require("../model/models/user");

const userContoller = {

    async allUser(req, res) {
        const allUser = await userModels.allUser();
        res.json(allUser);
    },

    async oneUser(req, res) {
        const id = parseInt(req.params.id);
        const oneUser = await userModels.oneUser(id);
        res.json(oneUser);
    },

    async createUser(req, res) {
        const { email, password, firstname, lastname } = req.body;
        const newUser = await userModels.createUser(email, password, firstname, lastname);
        res.json(newUser);
    },

    async updateUser(req, res) {
        const id = parseInt(req.params.id);
        const { email, password, firstname, lastname } = req.body;
        const upUser = await userModels.updateUser(id, email, password, firstname, lastname);
        res.json(upUser);
    },

    async deleteUser(req, res) {
        const id = parseInt(req.params.id);
        const delUser = await userModels.deleteUser(id);
        res.json(delUser);
    },
};

module.exports = userContoller;