const { getTypeDefs } = require('../../common');
const { gql } = require('graphql-tag');

module.exports = gql`
    ${getTypeDefs(__dirname, 'CategoriaInput')}
    ${getTypeDefs(__dirname, 'ProductoInput')}
    ${getTypeDefs(__dirname, 'InsertarCategoriaInput')}
    ${getTypeDefs(__dirname, 'InsertarProductoInput')}
`;
