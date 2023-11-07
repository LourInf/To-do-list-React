//import react and useState
import React, { useState } from "react";
import Input from "./Input";


const Home = () => {
	//4. useSate-input: we create the useState for our input
	const[inputValue, setInputValue] = useState("");
	//7. useSate-todos: we create the useState for our todo tasks (it's a list of tasks, so we need an empty array as initial state, not an empty string!)
	const[todos, setTodos] = useState([]);
	return (
		<div>
			<h1>My To do list</h1>
			{/*1. HTML: We want to create a to do list, so we need ul, li elements (at the beginning we hard code the text as example, later we change)
			   2. HTML: And we want the user to be able to type anything he wants, so we need as well as input*/}
			<ul>
			   		{/*5. useSate-input: we add onChange with a function to set the input value to whatever the input has everytime it changes*/}
					{/*6. useSate-input: we add value to make sure that represents the latest value of the input */}
					{/*8. useSate-todos: we add onKeyDown so that if the user presses Enter, we add the to do task to our array of todos. AND VERY IMPORTANT, we later delete de value by setting the inputValue to empty string */}
				<li><input type="text" 
						onChange ={(event) => setInputValue(event.target.value)} 
						value = {inputValue} 
						onKeyDown={(event)=> {if (event.key==="Enter"){setTodos(todos.concat(inputValue)); setInputValue("")}}} 
						placeholder="What do you need to do?"></input></li>
				{/*9. useSate-todos: what we want to render? for each to do I want to create an li element */}
				{todos.map((t) => (
					<li>{t} <i class="fas fa-trash-alt"></i></li>
				))}
			</ul>
			{/*3.HTML: I want to show the number of tasks left to do*/}
			<div>6 tasks</div>
		</div>
	);
};

export default Home;
