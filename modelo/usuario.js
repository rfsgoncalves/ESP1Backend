//criar a classe usuário da nossa aplicação
import UsuarioDAO from "../persistencia/usuarioDAO.js";

export default class Usuario{
    //definindo atributos privados da classe Usuario
    #id
    #nome
    #sobrenome
    #nomeUsuario
    #cidade
    #estado
    #cep

    constructor(id, nome, sobrenome, nomeUsuario, cidade, estado, cep){
        this.#id=id;
        this.#nome=nome;
        this.#sobrenome=sobrenome;
        this.#nomeUsuario=nomeUsuario;
        this.#cidade=cidade;
        this.#estado=estado;
        this.#cep=cep;
    }
    get id(){
        return this.#id;
    }

    set id(novoId){
        this.#id = novoId;
    }
    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get sobrenome(){
        return this.#sobrenome;
    }

    set sobrenome(novoSobrenome){
        this.#sobrenome = novoSobrenome;
    }

    get nomeUsuario(){
        return this.#nomeUsuario;
    }

    set nomeUsuario(novoNomeUsuario){
        this.#nomeUsuario = novoNomeUsuario;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
    }

    get cep(){
        return this.#cep;
    }

    set cep(novoCep){
        this.#cep = novoCep;
    }

    //override no método toString da classe pai (object)
    toString(){
        const conteudo =
        `
          {
            id: ${this.#id},
            nome: ${this.#nome},
            sobrenome: ${this.#sobrenome},
            nomeUsuario: ${this.#nomeUsuario},
            cidade: ${this.#cidade},
            estado: ${this.#estado},
            cep: ${this.#cep}
          }
        `;
        return conteudo;    
    }

    toJSON(){
        return {
            id: this.#id,
            nome: this.#nome,
            sobrenome: this.#sobrenome,
            nomeUsuario: this.#nomeUsuario,
            cidade: this.#cidade,
            estado: this.#estado,
            cep: this.#cep
        };
    }

    //observe o uso da palavra reservada async
    //async quer dizer que o método é assíncrono
    //métodos assíncronos são executados em paralelo 
    //e aguardam uma resposta que não depende da aplicação
    async gravar(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.gravar(this);
    };

    async atualizar(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.atualizar(this);
    };

    async excluir(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.excluir(this);
    };

    async consultar(){
        const usuDAO = new UsuarioDAO();
        return await usuDAO.consultar();
    };
}