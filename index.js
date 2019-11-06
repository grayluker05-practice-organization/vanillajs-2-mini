document.getElementById('form').addEventListener('submit', addTodo);

let addTodo = (e) => {
    e.preventDefault();
    let item = document.createElement('li');
    item.innerText = document.getElementById('item').value;
    item.addEventListener('click', completeToDo);

    let button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);
    item.append(button);
    
    let list = document.querySelector('ul');
    list.appendChild(item);
}

let removeTodo = (e) => {
    e.target.parentNode.remove();
}

let completeToDo = (e) => {
    let value = e.target.getAttribute('aria-checked').value;
    if(value !== 'true'){
        e.target.setAttribute('aria-checked', 'true');
    } else {
        e.target.setAttribute('aria-checked', 'false');
    }
}