const chalk = require('chalk');

function addProduct(db, product, context) {
  console.log(chalk.bold.gray(`Adding product ${product.name} | Invoking context: ${context}`));

  db.get('products')
    .push(product)
    .write();
}

module.exports = {
  addProduct,
};
