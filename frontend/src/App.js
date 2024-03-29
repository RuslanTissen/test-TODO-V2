import { useEffect, useState } from "react";
import ToDo from "./components/ToDo.js";
import { getAllToDo, addToDo, updatedTodo, deleteToDo } from "./components/utils/HandleApi.js";

function App() {
	const [toDo, setToDo] = useState([])
	const [text, setText] = useState("")
	const [update, setUpdate] = useState(false)
	const [toDoId, setToDoId] = useState("")

	useEffect(() => {
		getAllToDo(setToDo)
	}, [])

	const updateMode = (_id, text) => {
		setUpdate(true)
		setText(text)
		setToDoId(_id)
	}
	// const deleteToDo =(_id, toDo) =>{
	// 	setToDo(toDo)
	// }

	return (
		<div className="App">
			<div className="container">
				<h1>ToDo App</h1>

				<div className="top">
					<input
						type="text"
						placeholder="Add Todos..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>

					<div
						className="add"
						onClick={update
							? () => updatedTodo(toDoId, text, setToDo, setText, setUpdate)
							: () => addToDo(text, setText, setToDo)
						}>
						{update ? "Update" : "Add"}
					</div>
				</div>

				<div className="list">
					{toDo.map((item) => <ToDo
						key={item._id}
						text={item.text}
						updateMode={() => updateMode(item._id, item.text)}
						deleteToDo={() => deleteToDo(item._id, setToDo)}
					/>)}

				</div>

			</div>

		</div>
	);
}

export default App;
