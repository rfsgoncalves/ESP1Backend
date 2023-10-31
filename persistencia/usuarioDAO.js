import Usuario from "../modelo/usuario.js";
import Conectar from "./conexao.js";

export default class UsuarioDAO{

    async gravar(usuario){
        if (usuario instanceof Usuario){
            const conexao = await Conectar();
            const sql = `INSERT INTO usuario(nome, sobrenome, nomeUsuario, cidade, uf, cep)
                         VALUES (?, ?, ?, ?, ?, ?)`;
            const parametros = [usuario.nome, usuario.sobrenome, usuario.nomeUsuario,
                                usuario.cidade, usuario.estado, usuario.cep];
            const resultado = await conexao.query(sql, parametros);
            usuario.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
        
    }

    async atualizar(usuario){
        if (usuario instanceof Usuario){
            const conexao = await Conectar();
            const sql = `UPDATE usuario SET nome = ?, sobrenome = ?, nomeUsuario = ?, 
            cidade = ?, uf = ?, cep = ? WHERE id = ?`;
                         ;
            const parametros = [usuario.nome, usuario.sobrenome, usuario.nomeUsuario,
                                usuario.cidade, usuario.estado, usuario.cep, usuario.id];

            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(usuario){
        if (usuario instanceof Usuario){
            const conexao = await Conectar();
            const sql = `DELETE FROM usuario WHERE id = ?`;
            const parametros = [usuario.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(){
        let listaUsuarios = [];
        const conexao = await Conectar();
        const sql = `SELECT * FROM usuario order by nome`;
        const [rows, fields] = await conexao.query(sql);
        for (const registro of rows){
            const usuario = new Usuario(registro.id, registro.nome,
                                        registro.sobrenome, registro.nomeUsuario,
                                        registro.cidade, registro.uf, registro.cep);
            listaUsuarios.push(usuario);
        }
        global.poolConexoes.releaseConnection(conexao);
        return listaUsuarios;
    }
}