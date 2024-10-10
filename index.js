const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

// GET: LIRE  tout les utilizateurs
app.get("/", (req, res) => {
	res.json({
		msg: "hello rest api 🎉",
	})
})

// POST: CREER un utiilizateur avec les donnes du body
app.post("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le POST !!!! ",
	})
})

// PUT: MODIFIER un utiilizateur avec les donnes du body
app.put("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le PUT ",
	})
})

// DELETE: effacer un utilizateur
app.delete("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le DELETE ",
	})
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})
