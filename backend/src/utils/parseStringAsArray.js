const { model } = require("../models/Dev");

module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}