import * as orderService from "../services/order-service.js";

function State() {
  this.buttonOrder = null;
}

const state = new State();

export function init() {
  state.buttonOrder = document.querySelector("#order");

  state.buttonOrder.addEventListener("click", handleButtonOrderClick);
}

function handleButtonOrderClick(event) {
  event.preventDefault();
  orderService.order()
}
