export function Tabs(props) {
    let tabs = ['All', 'Tasks', 'Completed']

    //destructuring props from parent component
    const {todos} = props
    
    return (
        <nav className="tab-container">
            {
                tabs.map((tab, tabIndex) => {
                    const numTasks = tab === 'All' ? todos.length : tab === 'Tasks' 
                                        ? todos.filter(val=> !val.completed).length 
                                        : todos.filter(val=> val.completed).length
                    return(
                        <button key={tabIndex} className="tab-button">
                            <h4>{tab} &nbsp;  <span>[{numTasks}]</span></h4>
                        </button>
                    )
                })
            }
        </nav>
    )
}