#  GitHub Perfis - API 🔍
API Node.js que permite buscar dados de perfis públicos no GitHub (nome, bio, seguidores, repositórios e avatar).

## Tecnologias usadas 🚀
- Node.js
- Express
- Axios
- CORS
- Dotenv

## Instalação 📦
bash
git clone https://github.com/seu-usuario/github-perfis.git
cd github-perfis
npm install

## Exemplo de retorno 📸 
{
  "nome": "The Octocat",
  "bio": "Mascote do GitHub",
  "seguidores": 1000,
  "repositorios": 8,
  "avatar": "https://avatars.githubusercontent.com/u/583231?v=4",
  "link": "https://github.com/octocat"
}

## Rotas da API 📚
GET /perfil/:username
Retorna os dados do usuário (nome, bio, avatar, seguidores, etc).

# A API estará disponível em: http://localhost:8080  👍

