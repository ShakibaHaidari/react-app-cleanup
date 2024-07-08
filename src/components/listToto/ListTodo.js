function ListTodo(props) {
    return (
        <div className="flex bg-cyan-700 m-3 p-1 text-white justify-between rounded-md px-2">
            <p>{ props.title}</p>
            <button type='button' className="bg-red-700 p-2 rounded-md hover:bg-red-800" onClick={props.remove}>Delete todo</button>
        </div>
    )
}
export default ListTodo;