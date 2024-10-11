const express = require("express")
const { param } = require("express/lib/request")
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
	// récupérer toutes les données qui arrivent dans le corps de la requête (body)
	const { firstName, lastName } = req.body

	// récupérer l'ID du dernier utilisateur en fonction du nombre d'utilisateurs dans notre variable de tableau 'users'.
	const lastId = users[users.length - 1].id
	// ajouter un pour créer un utilisateur unique
	const newId = lastId + 1

	// créer le nouvel utilisateur avec les données du corps de la requête et l'ID calculé
	const newUser = {
		firstName,
		lastName,
		id: newId,
	}

	// ajouter le nouvel utilisateur à notre liste d'utilisateurs en utilisant la méthode 'push'
	users.push(newUser)
	// envoyer le code de statut 201 (créé) et les données du nouvel utilisateur afin de confirmer au client.
	res.status(201).json(newUser)
})

// PUT : MODIFIER un utilisateur basé sur les données envoyées dans le corps(body) et le paramètre passé dans l'URL
app.put("/:id", (req, res) => {
	// recuerer le ID envoier via le URL comme un param
	const { id } = req.params

	// récupérer toutes les données qui arrivent dans le corps de la requête (body)
	const { firstName, lastName } = req.body

	// on essai de trouver le utilisateur base sur son ID
	const userIndex = users.findIndex((user) => user.id === parseInt(id))
	// pas trouvé
	if (userIndex < 0) {
		return res.status(404).json({
			msg: "on fait, il ne existe pas. User Id: " + id,
		})
	}
	// verifier quelle son le donne envoier par l'utilisateur
	if (firstName) users[userIndex].firstName = firstName
	if (lastName) users[userIndex].lastName = lastName

	res.json({
		msg: "modifie !!!",
		userModified: users[userIndex],
	})
})

// DELETE : supprimer un utilisateur basé sur le paramètre passé dans l'URL
app.delete("/:id", (req, res) => {
	// recuerer le ID envoier via le URL comme un param
	const { id } = req.params

	// on essai de trouver le utilisateur base sur son ID
	const userIndex = users.findIndex((user) => user.id === parseInt(id))
	// pas trouvé
	if (userIndex < 0) {
		return res.status(404).json({
			msg: "on fait, il ne existe pas. User Id: " + id,
		})
	}

	// efface le utilisater de notre liste de utilisateurs
	users.splice(userIndex, 1)

	console.log(users);
	

	res.json({
		msg: "utilisateur efface !!!! Sin id: " + id,
	})
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})
