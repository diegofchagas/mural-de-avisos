class Posts{
    constructor(id,titulo,descricao){

        this.id = this.geradorID(id);
        this.titulo = titulo;
        this.descricao = descricao
    }

    geradorID(){
        return Math.random().toString(36).substring(2, 9)
    }
}

export default Posts;