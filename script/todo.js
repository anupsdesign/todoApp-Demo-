let todos = [];

const filters = {hideCompleted:false};

const renderTodos = function(todos,filters){
    
    const filteredTodos = todos.filter(function(todo){
        return !filters.hideCompleted||!todo.completed;
    });
    
    document.querySelector('#todos').innerHTML = '';
    
    const incompleteTodos = todos.filter(function(todo){
        return !todo.completed;
    });
    
    const spanNote = document.createElement('span');
    spanNote.textContent = `Your todos will appear here`;

    if(incompleteTodos.length == 0){
     document.querySelector('#todos').appendChild(spanNote);
    }
    const hideLeftMeme = document.querySelector('.memeLeft');
    if(incompleteTodos.length > 0){
        hideLeftMeme.style.display = "none";
    }
    
    const hideRightMeme = document.querySelector('.memeRight');
    if(incompleteTodos.length > 0){
        hideRightMeme.style.visibility = "hidden";
    }
    
    const summary = document.createElement('h2');
        if(incompleteTodos.length == 0){
            summary.textContent = `You have nothing on your list`;
        }
        else{
            summary.textContent = `You have ${incompleteTodos.length} todos left`;
        }
    document.querySelector('#todos').appendChild(summary);
    
    
    filteredTodos.filter(function(todo){
        const inputTextRender = document.createElement('p');
        inputTextRender.textContent = todo.text;
        document.querySelector('#todos').appendChild(inputTextRender);
    });
}
renderTodos(todos,filters);

document.querySelector('#new-todo').addEventListener('submit',function(e){
   e.preventDefault();
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    })
    e.target.elements.text.value = '';
    renderTodos(todos,filters);
});