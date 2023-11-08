import { Router } from "express";
import UsuarioCtrl from "../controle/UsuarioCtrl.js";

const rotaUsuario = new Router();
const usuCtrl = new UsuarioCtrl();

rotaUsuario.get('/', usuCtrl.consultar)
.post('/', usuCtrl.gravar)
.put('/', usuCtrl.atualizar)
.patch('/', usuCtrl.atualizar)
.delete('/',usuCtrl.excluir);

export default rotaUsuario;