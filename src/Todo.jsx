function Todo(props) {
    const { name, time, isDone } = props; // Destructure the props if needed



    return (
        <div>
            <p>this is Todo: {time}</p>
            <p>this is Todo: {name}</p>

        </div>
    );
}
export default Todo