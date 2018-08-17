let todos = [];

const filters = {hideCompleted:false,deleteAll:false};

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
        
        const newTodoDiv = document.createElement('div');
        newTodoDiv.setAttribute("class","new-todo-div")
        
            const label = document.createElement('label');
            label.setAttribute("class","custom-label")
            
            const checkBox = document.createElement('input');
            checkBox.setAttribute("id","todo-check-Box");
            checkBox.type = "checkbox";
            label.appendChild(checkBox);
            newTodoDiv.appendChild(label);
        
            const inputTextRender = document.createElement('p');
            inputTextRender.textContent = todo.text;
            newTodoDiv.appendChild(inputTextRender);
            
            const button = document.createElement('button');
            button.textContent = "X";
            button.setAttribute("class","delete-todo");
            newTodoDiv.appendChild(button);
        document.querySelector('#todos').appendChild(newTodoDiv);
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