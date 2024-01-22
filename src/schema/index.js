const { getTypeDefs } = require('../common');
const { gql } = require('graphql-tag');
const scalars = require('./scalars');
// const enums = require('./enums');
const types = require('./types');
// const interfaces = require('./interfaces');
// const unions = require('./unions');
const inputs = require('./inputs');

module.exports = gql`
    ${scalars}
    ${inputs}
    ${types}
    type Query
    ${getTypeDefs(__dirname, 'query')}
    type Mutation
    ${getTypeDefs(__dirname, 'mutation')}
`;