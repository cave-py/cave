const { getTypeDefs } = require('../../common');
const { gql } = require('graphql-tag');

module.exports = gql`
    ${getTypeDefs(__dirname, 'Categoria')}
    ${getTypeDefs(__dirname, 'Producto')}
`;
