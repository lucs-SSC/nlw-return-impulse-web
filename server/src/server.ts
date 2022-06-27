import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log("Server running!")
});

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações
// PATCH = Atualizar informação única de uma entidade
// DELETE = deletrar uma informação