import todoList from "../store/TodoList.js";
import gradientConsole from "../utils/gradientConsole.js";
const displayTodoListHandler = () => {
    todoList.map((task, index) => {
        console.log(gradientConsole(`Task:${index + 1} = ${task}.`));
    });
};
export default displayTodoListHandler;
