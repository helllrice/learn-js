const todoView= document.getElementById('todoView');
const formTodo = document.getElementById('formTodo');
const completeBtns = document.querySelectorAll('.btn-complete');

const state = {
    counterd: 0,
    filter: 'all',
    todos: []
}

formTodo.addEventListener('submit', e => {
    e.preventDefault();
    const input = formTodo.querySelector('input');
    const value = input.value;
    if (value.trim() !== '') {
        addTodo(value);
        input.value = '';
    }; 
});

todoView.addEventListener('click', e => {
    if (e.target.classList.contains('todo-btn')) {
        toggleCompleteTodo(e.target.getAttribute('data-id'));
    } 
    if (e.target.classList.contains('todo-delete')) {
        removeTodo(e.target.getAttribute('data-id'));
    }
});

completeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchTodos(btn.getAttribute('data-filter'));
        renderBtns();
    })
});

function toggleCompleteTodo(counterd) {
   const newTodos = state.todos.map(todo => {
        if (todo.counterd === +counterd) {
            return {
                ...todo,
                complete: !todo.complete,
            }
        }   
        return todo;
   });
   state.todos = newTodos;
   render();
}

function removeTodo(counterd) {
    const todo = state.todos.filter(todo => todo.counterd === +counterd)[0];
    const index = state.todos.indexOf(todo);
    state.todos = [
        ...state.todos.slice(0, index),
        ...state.todos.slice(index + 1),
    ];

    render();
}

function switchTodos(param) {
    state.filter = param;
    render();
}

function filterTodos(array) {
    switch (state.filter) {
        case 'not_completed': 
            return array.filter(item => !item.complete);    
        case 'completed': 
            return array.filter(item => item.complete);    
        default: 
            return array;   
    }
}

function render() {
    const array = filterTodos(state.todos);
    const html = array.map(({title, counterd, complete}) => {
        const todoBtn = `<button data-id="${counterd}" class="todo-btn">${complete ? '??????????????' : '??????????????????'}</button>`;
        return (`
            <li>
                <span>${title}</span>
                ${todoBtn}
                <button data-id="${counterd}" class="todo-delete">??????????????</button>
            </li>
        `);
    }).join('');

    todoView.innerHTML = html;
}

function addTodo(title) {
    const todo = {
        counterd: state.counterd++,
        title,
        complete: false
    }
    
    state.todos.push(todo);
    render();
}

function renderBtns() {
    completeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === state.filter) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBtns();
    render();
})
