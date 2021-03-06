class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._connection.query("SELECT * FROM produtos", (err, result) => {
                err => {
                    if (err) return reject('Não foi possível listar os produtos');
                }
                return resolve(result);
            });
        });
    }

    buscaId(id) {
        return new Promise( (resolve, reject) => {
            this._connection.query('select * from produtos where id=?',id , (err, result) => {
                err => {
                    if(err) return reject('Não foi possível buscar o produto');
                }
                return resolve(result);
            });
        });
    }

    filtrar(categoria) {
        return new Promise( (resolve, reject ) => {
            this._connection.query("select * from produtos where categoria=?", categoria, (err, result) => {
                err => {
                    if(err) return reject("Falha ao carregar produtos da categoria");
                }
                return resolve(result)
            });
        });
    }

    pesquisa(query) {

    }
    
}


module.exports = function() {
    return ProdutosDAO;
}