// Inputs and InnerHTML

//,innerHTML command:
//  1. Gets the content of an HTML element. E.g  <p>Click <a>here<a/><p/>
//  The InnerHTML of the paragraph is: Click<a>here<a/>
//The InnerHTML of the anchor <a> is: here.
// 2. Sets the content of an HTML element.

// document.getElementById("btn").addEventListener("click", showContent);

// function showContent() {
//   document.getElementById("output").innerHTML =
//     "Welcome to my Pizzaria, order below.";
// }

//Value command: retrieves command of an <input> button.

document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  let topping1 = document.getElementById("top1input").value;
  let topping2 = document.getElementById("top2input").value;
  let size = document.getElementById("size").value;

  document.getElementById(
    "output"
  ).innerHTML = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in twelve minutes.`;
}
