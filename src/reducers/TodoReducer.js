function TodoReducer(state, action) {
    if(action.type == 'add_todo') {
        let nextId = state.length + 1;
        return [...state, {id: nextId, text: action.payload.todoText, isFininsed: false}];
    }
    
    
    else if(action.type == 'edit_todo') {
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id) {
                todo.text = action.payload.newTodo;
            }
            return todo;
        });
    }
    
    
    else if(action.type == 'finish_todo' ) {
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id) {
                todo.isFininsed = action.payload.state;
            }
            return todo;
        });
    }
    
    
    else if(action.type == 'delete_todo') {
        const newTodoList = state.filter(todo => todo.id != action.payload.id);
        return (newTodoList)
    }
    return state;
}

export default TodoReducer