import inquirer from "inquirer";
import gradientConsole from "../utils/gradientConsole.js";
import userInputHandler from "./userInputHandler.js";
import displayTodoListHandler from "./displayTaskHandler.js";
const addAnotherTaskHandler = () => {
    inquirer
        .prompt({
        name: "addTask",
        message: gradientConsole("Would you like to add another task to your list"),
        type: "list",
        choices: ["Yes", "No"],
    })
        .then((value) => {
        if (value.addTask === "Yes") {
            userInputHandler();
        }
        else if (value.addTask === "No") {
            displayTodoListHandler();
        }
    })
        .catch((error) => {
        console.log("Error:", error);
    });
};
export default addAnotherTaskHandler;
