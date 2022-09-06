import tagModels from "../model/models/tag.js";

const tagContoller = {
    async getAllTags(req, res) {
        const allTags = await tagModels.AllTags();
        res.json(allTags);
    },

    async getOneTag(req, res) {
        const id = parseInt(req.params.id);
        const oneTag = await tagModels.OneTag(id);
        res.json(oneTag);
    },

    async createTag(req, res) {
        const name = req.body.name;
        const newTag = await tagModels.createTag(name);
        res.json(newTag);
    },

    async updateTag(req, res) {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const upTag = await tagModels.updateTag(id, name);
        res.json(upTag);
    },

    async deleteTag(req, res) {
        const id = parseInt(req.params.id);
        const delTag = await tagModels.deleteTag(id);
        res.json(delTag);
    },
};

export default tagContoller;