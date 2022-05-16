function notFound(req, res, next) {
    res.status(404).json({error: "Not Found"});
    next();
}

function error500(error, res) {
    if (error.message) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    notFound,
    error500,
};