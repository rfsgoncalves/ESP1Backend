import express from "express";
import rotaUsuario from "./rotas/rotaUsuario.js";

const host = '0.0.0.0';
const porta = 4000;

const app = express();

//permitir que o express manipule objetos no formato JSON
app.use(express.json());

app.use('/usuario', rotaUsuario);

app.listen(porta, host, () => {
    console.log(`Servidor esperando por requisições em http://${host}:${porta}`);
});