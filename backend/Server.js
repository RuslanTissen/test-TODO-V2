const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const routes = require("./routes/ToDORoute.js")

require("dotenv").config()
const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Listening to MONGODB..."))
	.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`listening on ${PORT}`))