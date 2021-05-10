let todos = [];
let todo = document.getElementById('todo');
let todoView = document.getElementById('todoView');


document.getElementById('add').addEventListener('click', function () {
    let id = todos.length + 1;
    todos.push({
        id,
        title: todo.value,
        complete: false
    });
    let btn = document.createElement('button');
    btn.textContent = 'удалить';
    btn.id = 'button';
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = todo.value;
    span.dataset.todo = id;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.todo = id;
    checkbox.addEventListener('change', function (e) {
        todos.forEach(t => {
            if (t.id === e.target.todo) {
                let span = document.querySelector( `span[data-todo='${e.target.todo}']`);
                t.complete = !t.complete;
                span && t.complete ? span.style.textDecoration = 'line-througt' : span.style.textDecoration = 'none';
            }
        })
    } )

    li.appendChild(btn)
    li.appendChild(checkbox);
    li.appendChild(span);

  btn.onclick = function() {
    
  }

    todoView.appendChild(li);
    todos.value = '';   
})


function filterByTitle(param) {
    todos.forEach((item) => {
        if(item.title !== param !== '') {
            item.display = false;
        } else {
            item.display = true;
        }
    })
}