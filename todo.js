const toDoList = {
  todos: [],
  displayToDos: function() {
    if (this.todos.length === 0) {
      console.log('Your to do list is empty!');
    } else {
      console.log('My todos: ');
      for (var i = 0; i < this.todos.length; i++) {
        let text = this.todos[i].todoText;
        if (this.todos[i].completed === true) {
          console.log('(x)', text);
        } else {
          console.log('()', text);
        }
      }
    }
  },
  addToDo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayToDos();
  },
  changeToDo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayToDos();
  },
  deleteToDo: function(position) {
    this.todos.splice(position, 1);
    this.displayToDos();
  },
  toggleCompleted: function(position) {
    const todo = this.todos[position];
    // toggling initial value created with addToDo
    todo.completed = !todo.completed;
    this.displayToDos();
  },
  toggleAll: function() {
    const allToDos = this.todos.length;
    var completedToDos = 0;

    for (let i = 0; i < allToDos; i++) {
      if (this.todos[i].completed === true) {
        completedToDos++;
      }
    }

    if (completedToDos === allToDos) {
      for (let i = 0; i < allToDos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < allToDos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayToDos();
  }
};
