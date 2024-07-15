document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
  
    // Fetch todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        todos.forEach(todo => {
          // Create a div element for each todo item
          const todoItem = document.createElement('div');
          todoItem.className = 'todo-item';
          if (todo.completed) {
            todoItem.classList.add('completed');
          }
  
          // Add todo title
          const todoTitle = document.createElement('span');
          todoTitle.textContent = todo.title;
          todoItem.appendChild(todoTitle);
  
          // Add todo status
          const todoStatus = document.createElement('span');
          todoStatus.textContent = todo.completed ? 'Completed' : 'Pending';
          todoItem.appendChild(todoStatus);
  
          // Append the todo item to the list
          todoList.appendChild(todoItem);
        });
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  });
  