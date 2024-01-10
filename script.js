// 1. Selecting HTML Elements

const form = document.querySelector("form");
const input = document.querySelector("#input_id");
const button = document.querySelector(".btn");
// new UL
const todoList = document.getElementById("todoList");

// 2. Add Click Events

// Add Items
button.addEventListener("click", add_li);
function add_li(e) {
  e.preventDefault();
  const li = document.createElement("li");

  const itemId = Date.now(); // Unique Id
  li.setAttribute("data-id", itemId);
  li.className = "li_item";
  li.innerHTML = input.value;
  input.value = "";
  //

  const dlt = document.createElement("button");
  dlt.innerHTML = "Delete";
  dlt.classList = "dlt_btn";

  //
  todoList.appendChild(li);
  li.appendChild(dlt);

  // Delete Items
  dlt.addEventListener("click", dlt_item);

  function dlt_item(e) {
    e.preventDefault();
    // form.removeChild(li);
    const listItem = document.querySelector(`[data-id="${itemId}"]`);
    todoList.removeChild(listItem);
  }
}

