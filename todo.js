const toDoList = {
  todos: ['item 1', 'item2', 'item3'],
  displayToDos: function() {
    console.log('My todos:', this.todos);
  },
  addToDo: function(todo) {
    this.todos.push(todo);
    this.displayToDos();
  },
  changeToDo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayToDos();
  },
  deleteToDo: function(position) {
    this.todos.splice(position, 1);
    this.displayToDos();
  }
};
