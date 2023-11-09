//import react and useState
import React, { useState } from "react";


const Home = () => {
	//4. useSate-input: we create the useState to manage the input value
	const[inputValue, setInputValue] = useState("");
	//7. useSate-todos: we create the useState for the to-do tasks (it's a list of tasks, so we need an empty array as initial state, not an empty string!)
	const[todos, setTodos] = useState([]);
	return (
		<div className = "container">
			<div className = "heading">
			<h1>My To-Do List</h1>
			{/*1. HTML: We want to create a to do list, so we need ul, li elements (at the beginning we hard code the text as example, later we change)*/}
			{/*2. HTML: And we want the user to be able to type anything he wants, so we need as well as input*/}
			</div>
			<div className = "form">
			<ul>
			   		{/*5. useSate-input: we add onChange with a function to update the input value to whatever the input has everytime it changes. We want to get a hold of the value of the target that triggered the event*/}
					{/*6. useSate-input: we add value to make sure it represents the latest value of the input */}
					{/*8. useSate-todos: we add onKeyDown so that if the user presses Enter and the value is not empty, we add the to-do task to our array of todos. AND VERY IMPORTANT, we later clean de value by setting the inputValue to empty string */}
					<li><input type="text" 
							onChange ={(event) => setInputValue(event.target.value)} 
							value = {inputValue} 
							onKeyDown={(event)=> {if (event.key === "Enter") {
								event.preventDefault(); // Prevents the default behavior of the Enter key
								if (inputValue.trim() !== "") { // to check if the input is not empty or contains only whitespaces
									setTodos([...todos, inputValue]); // we add the task to our array using the spread operator. Before I had: "setTodos(todos.concat(inputValue));", which also can work.
								  setInputValue("");
								}
							  }
							}}
							placeholder="What do you need to do?"></input></li>
					{/*9. useSate-todos: between { } we enter whatever we want to render: in our case, we want to dynamically create additional li elements for each to-do item in the array.  
					  10. useSate-todos: we add an onClick to the trash icon so whenever the user click on it, the task is deleted from the array. For that we need the filter method */}
					{todos.map((item, index) => (
					<div>
						<li key={index}>{item} <i className="fas fa-trash-alt" onClick ={() => setTodos(todos.filter((item, currentIndex) => index !=currentIndex))}></i></li>
					</div>
					))}
			</ul>
			</div>
			{/*3.HTML: We also want to show the number of tasks left to do*/}
			{/*3.useSate-todos: We want to dynamically show the number of todos left, so we use the .length method on the todo variable*/}
			<div className="tasksLeft">{todos.length === 0 ? "No tasks, add a task" : todos.length + " tasks"} </div>
		</div>
	);
};

export default Home;

