import inquirer from "inquirer";
import gradientConsole from "../utils/gradientConsole.js";
import todoList from "../store/TodoList.js";
import addAnotherTaskHandler from "./addAnotherTaskHandler.js";

const userInputHandler = () => {
  inquirer
    .prompt([
      {
        name: "task",
        message: gradientConsole(
          `Please enter ${
            todoList.length > 0 ? todoList.length + 1 : "a"
          } task:`
        ),
        type: "input",
      },
    ])
    .then((value) => {
      const task = value.task;
      todoList.push(task);

      console.log(gradientConsole("Your task was added to do list"));

      addAnotherTaskHandler();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export default userInputHandler;
