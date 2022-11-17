const priceInput = document.getElementById("priceInput");
const priceLabel = document.getElementById("priceLabel");
const tipLabel = document.getElementById("tipLabel");

const tipInput = document.getElementById("tipInput");
const tipOutput = document.getElementById("tipOutput");

tipInput.onclick = function () {
  let price = priceInput.value;
  price = Number(price);
  let tip = tipInput.value;
  tip = Number(tip);

  let tipProcentage = tip / 100;
  let tipAmouth = price * tipProcentage;
  let totalPrice = price + tipAmouth;

  tipOutput.innerHTML = `${tipInput.value}%`;
  tipLabel.innerHTML = `Tip amouth: ${tipAmouth}`;
  priceLabel.innerHTML = `Total price ${totalPrice}`;
};
