const refs = {
  input: document.querySelector(".content"),
  button: document.querySelector("#todo-button-add"),
};

const todo = {
  init() {
    const fromStorage = localStorage.getItem("todo");
    if (fromStorage) {
      document.querySelector(".todo__items").innerHTML = fromStorage;
    }
    document.addEventListener("click", this.update.bind(this));
    document.addEventListener("click", this.delete.bind(this));
  },

  add() {
    if (refs.input.disabled || !refs.input.value.length) {
      return alert("Please enter text in the Todo field!");
    }
    document
      .querySelector(".todo__items")
      .insertAdjacentHTML("beforeend", this.create(refs.input.value));
    refs.input.value = "";
  },

  create(text) {
    return `<li class="todo_item" data-todo="active">
              <p class="todo_text">${text}</p>
              <span class="todo_delete">Delete</span>
            </li>`;
  },

  update(e) {
    if (e?.target.tagName === "P") {
      updeteText = prompt("Do you want to update Todo?");
      if (updeteText) {
        e.target.textContent = updeteText;
        this.save();
      }
    }
  },

  save() {
    localStorage.setItem(
      "todo",
      document.querySelector(".todo__items").innerHTML
    );
  },

  delete(e) {
    if (e?.target.tagName === "SPAN") {
      e.target.parentNode.hidden = true;
    }
    this.save();
  },
};

refs.button.addEventListener("click", handleTodos);

todo.init();

function handleTodos(e) {
  todo.add();
  todo.save();
  todo.update();
  todo.delete();
}
