export default function Order(products) {
  this.products = products;
  this.money = 0;
}

Order.prototype.total = function () {
  return this.products
    .reduce(
      (previousValue, currentValue) =>
        previousValue + Number(currentValue.price),
      0
    )
    .toFixed(2);
};

Order.prototype.change = function () {
  return (this.money - this.total()).toFixed(2);
};
