// const enums = require('./enums');
const types = require('./types');
// const interfaces = require('./interfaces');
// const unions = require('./unions');
const Query = require('./queries');
const Mutation = require('./mutations');

module.exports = {
    // ...enums,
    ...types,
    // ...interfaces,
    // ...unions,
    Query,
    Mutation,
};