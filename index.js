import Usuario from "./modelo/usuario.js";


const usuario = new Usuario(1, 'Helena', 'Santos', 
                               'ralcantara', 'Maringá', 'PR', 
                               '01021-001');


/*usuario.gravar().then(() => {
    console.log('Usuário gravado com sucesso!');
}).catch((erro) => {
    console.log('Não foi possível gravar o usuário no banco de dados: ' + erro.message);
})*/

/*usuario.atualizar().then(() => {
    console.log('Usuário atualizado com sucesso!');
}).catch((erro) => {
    console.log('Não foi possível atualizar o usuário no banco de dados: ' + erro.message);
})*/

/*usuario.excluir().then(() => {
    console.log('Usuário excluído com sucesso!');
}).catch((erro) => {
    console.log('Não foi possível excluir o usuário no banco de dados: ' + erro.message);
});*/

usuario.consultar().then((listaUsuarios) => {
    for (const usuario of listaUsuarios){
        console.log(usuario.toJSON());
    }
}).catch((erro) => {
    console.log('Não foi possível excluir o usuário no banco de dados: ' + erro.message);
})