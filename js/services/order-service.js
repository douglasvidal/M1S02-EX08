import Product from "../models/product.js";
import Order from "../models/order.js";

export function order() {
  let products = getProducts();

  let order = new Order(products);

  showTotalOrder(order);

  getMoney(order);

  showChange(order);

  createCardElement(order);
}

function getProducts() {
  let price = 0;
  let products = [];
  let count = 1;

  do {
    price = Number.parseFloat(
      prompt("Informe o preço do produto, ou 0 para finalizar a compra")
    ).toFixed(2);
    if (price > 0) {
      products.push(new Product(`Produto ${count}`, price));
      count++;
    }
  } while (price > 0);
  return products;
}

function showTotalOrder(order) {
  alert(`O valor total da compra: R$ ${order.total()}`);
}

function getMoney(order) {
  order.money = prompt("Qual o valor em dinheiro fornecido pelo cliente?");
}

function showChange(order) {
  alert(`Troco: R$ ${order.change()}`);
}

function createCardElement(order) {
  let divElementCard = createDivCard();

  addProductsIn(divElementCard, order.products);

  divElementCard.appendChild(createTotalElement(order));
  divElementCard.appendChild(createMoneyElement(order));
  divElementCard.appendChild(createChangeElement(order));

  let divStore = document.querySelector("#store");
  divStore.appendChild(divElementCard);
}
function createDivCard() {
  let divElement = document.createElement("div");

  divElement.style.border = "2px solid #000";
  divElement.style.marginTop = "20px";
  divElement.style.padding = "10px";

  return divElement;
}

function addProductsIn(element, products) {
  for (const product of products) {
    element.appendChild(createProductElement(product));
  }
}

function createProductElement(product) {
  return createPElement(`${product.name}: R$ ${product.price}`);
}

function createTotalElement(order) {
  return createPElement(`Total: R$ ${order.total()}`);
}

function createMoneyElement(order) {
  return createPElement(`Dinheiro: R$ ${order.money}`);
}

function createChangeElement(order) {
  return createPElement(`Troco: R$ ${order.change()}`);
}

function createPElement(text) {
  let pElement = document.createElement("p");

  pElement.innerHTML = text;
  return pElement;
}
