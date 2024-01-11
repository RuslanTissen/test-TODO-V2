import axios from "axios"

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
	axios
		.get(baseUrl)
		.then(({ data }) => {
			console.log("data---->", data);
			setToDo(data)
		})
}

const addToDo = (text, setText, setToDo) => {
	axios
		.post(`${baseUrl}/save`, { text })
		.then((data) => {
			console.log(data)
			setText("")
			getAllToDo(setToDo)
		})
		.catch((err) => console.log(err))

}

const updatedTodo = (toDoId, text, setToDo, setText, setUpdate) => {
	axios
		.put(`${baseUrl}/update`, { _id: toDoId, text })
		.then((data) => {
			setText("")
			setUpdate(false)
			getAllToDo(setToDo)
		})
		.catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
	axios
		.delete(`${baseUrl}/delete`, { _id })
		.then((data) => {
			console.log(data)
			getAllToDo(setToDo)
		})
		.catch((err) => console.log(err))
}

export { getAllToDo, addToDo, updatedTodo, deleteToDo }