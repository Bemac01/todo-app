export function Header(props) {

    const {todos} = props
    const todolength = todos.length 

    console.log(todolength)

    return(
        <>
            <header>
                <h1 className="text-gradient">You have {todolength} Todo {todolength > 1 ? 'Tasks' : 'Task'}</h1>
            </header>
        </>
    )
}


