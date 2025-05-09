require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const GITHUB_API_URL = "https://api.github.com/users";


app.get('/perfil/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`${GITHUB_API_URL}/${username}`);

        const perfil = {
            nome: response.data.name,
            bio: response.data.bio,
            seguidores: response.data.followers,
            repositorios: response.data.public_repos,
            avatar: response.data.avatar_url,
            link: response.data.html_url
        };

        res.json(perfil);
    } catch (error) {
        res.status(404).json({ error: "Usuário não encontrado" });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(` Servidor rodando na porta ${PORT}`);
});