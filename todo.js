const todos = ['item 1', 'item2', 'item3'];

function displayTodos(){
  console.log("My todos:", todos);
}

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}
