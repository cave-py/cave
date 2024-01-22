const { join } = require('path');
const { readFileSync } = require('fs');

module.exports = (dirname, name) => {
    return readFileSync(join(dirname, `${name}.graphql`)).toString('utf8');
};