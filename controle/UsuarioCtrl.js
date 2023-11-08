import Usuario from '../modelo/usuario.js';
//A classe UsuarioCtrl servirá como camada de controle entre a aplicação
//e a Internet
//Ela traduz http em regras internas da aplicação (negócio ou solução)
//Desenvolvimento da API atendendo ao padrão REST API
export default class UsuarioCtrl {

    //método POST do HTTP
    gravar(requisicao, resposta) {
        //responder no formato JSON
        resposta.type('application/json');
        if (requisicao.method === 'POST') {
            //obter os dados do corpo da requisição
            const dados = requisicao.body;
            //criar um objeto da classe Usuario
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const nomeUsuario = dados.nomeUsuario;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const cep = dados.cep;
            if (nome && sobrenome && nomeUsuario && cidade && estado && cep) {
                const usuario = new Usuario(0, nome, sobrenome,
                    nomeUsuario, cidade,
                    estado, cep);
                usuario.gravar().then(() => { //promise(promessa) foi atendida
                    resposta.json({
                        status: true,
                        mensagem: "Usuário gravado com sucesso!",
                        id_usuario: usuario.id
                    });
                }).catch((erro) => {
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível registrar o usuário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Os campos nome, sobrenome, nomeUsuario, cidade, estado e cep são obrigatórios!"
                });
            }
        }
        else {
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Utilize o método POST"
            });
        }
    }

    //método PUT ou PATCH do HTTP
    atualizar(requisicao,resposta) {
        //responder no formato JSON
        resposta.type('application/json');
        if (requisicao.method === 'PUT' || requisicao.method === 'PATCH') {
            //obter os dados do corpo da requisição
            const dados = requisicao.body;
            //criar um objeto da classe Usuario
            const id = dados.id
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const nomeUsuario = dados.nomeUsuario;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const cep = dados.cep;
            if (id && nome && sobrenome && nomeUsuario && cidade && estado && cep) {
                const usuario = new Usuario(id, nome, sobrenome,
                    nomeUsuario, cidade,
                    estado, cep);
                usuario.atualizar().then(() => { //promise(promessa) foi atendida
                    resposta.json({
                        status: true,
                        mensagem: "Usuário atualizado com sucesso!",
                    });
                }).catch((erro) => {
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível atualizar o usuário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Os campos id, nome, sobrenome, nomeUsuario, cidade, estado e cep são obrigatórios!"
                });
            }
        }
        else {
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Utilize o método PUT ou PATCH"
            });
        }
    }

    //método DELETE do HTTP
    excluir(requisicao, resposta) {
        //responder no formato JSON
        resposta.type('application/json');
        if (requisicao.method === 'DELETE') {
            //obter os dados do corpo da requisição
            const dados = requisicao.body;
            //criar um objeto da classe Usuario
            const id = dados.id;
            if (id) {
                const usuario = new Usuario(id);
                usuario.excluir().then(() => { //promise(promessa) foi atendida
                    resposta.json({
                        status: true,
                        mensagem: "Usuário excluído com sucesso!",
                    });
                }).catch((erro) => {
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível excluir o usuário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "O campo id é obrigatório!"
                });
            }
        }
        else {
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Utilize o método DELETE"
            });
        }
    }

    //método GET do HTTP
    consultar(requisicao, resposta) {
        //responder no formato JSON
        resposta.type('application/json');
        if (requisicao.method === 'GET') {
            //obter os dados do corpo da requisição
            const usuario = new Usuario(0);
            usuario.consultar().then((listaUsuarios) => { //promise(promessa) foi atendida
                resposta.json(listaUsuarios);
            }).catch((erro) => {
                resposta.json({
                    status: false,
                    mensagem: "Não foi possível obter os usuários: " + erro.message
                });
            });
        }
        else {
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Utilize o método GET"
            });
        }
    }
}