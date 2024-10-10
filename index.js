const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

const users = [
	{ id: 1, firstName: "John", lastName: "Doe", role: "admin" },
	{ id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
	{ id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
	{ id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
	{ id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]

// GET : LIRE tous les utilisateurs
app.get("/", (req, res) => {
	res.json(users)
})

// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
app.post("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le POST !!!! ",
	})
})

// PUT : MODIFIER un utilisateur basé sur les données envoyées dans le corps(body) et le paramètre passé dans l'URL
app.put("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le PUT ",
	})
})

// DELETE : supprimer un utilisateur basé sur le paramètre passé dans l'URL
app.delete("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le DELETE ",
	})
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})
