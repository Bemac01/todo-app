import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const {todo} = props

    //filtering the todo according to tabs
    const tab = "All"
    const filterTodo = tab === 'All' ? todos : tab === "Completed" ? todos.filter(val => val.completed) : todos.filter(val => !val.completed)
    return (
        <>
            {filterTodo.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        key={todoIndex} 
                        todo={todo}
                    />
                )
            })}
        </>
    )
}