import Todo from "../Todo/Todo"

function TodoList ( { todos, setTodos } ) {

    function onDeleteTodo(id){
        const newTodoList = todos.filter(todo => todo.id != id);
        setTodos(newTodoList)
    }

    return(
        todos && todos.map(
            (todo) => <Todo 
                        key={todo.id} 
                        text={todo.text}
                        id={todo.id} 
                        isFinished={todo.isFinished} 
                        deleteTodo={() => onDeleteTodo(todo.id)}
                    />)
    )
    
}

export default TodoList