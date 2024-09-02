function TodoReducer(state, action) {
    if(UserActivation.type == 'add_todo') {
        let nextId = state.length+1;
        setTodos([...todos, {id: nextId, text: todoText, isFininsed: false}]);
    } 
    else if(action.type == 'edit_todo') {
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id) {
                todo.text = action.payload.newTodo;
            }
            return todo;
        });
    } 
    else if(action.type == 'finish todo' ) {
        const newTodoList = state.map(todo => {
            if(todo.id == action.payload.id) {
                todo.text = action.payload.state;
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