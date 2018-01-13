const Category = require('../models/category.js');
module.exports = exports;
exports.createCategory = function(req, res) {
    const { title } = req.body;
    if(!req.body.title) {
        res.status(400).send({ message: "title can not be empty" });
    }
    const category = new Category({
        title,
    });

    category.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the category." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all categories from the database.
    category.find({})
    .then(function(categories){
        res.status(200).json(categories);
    }).catch(function(error) {
        res.status(500).json({ error: "could not find any categories" });
    });
};