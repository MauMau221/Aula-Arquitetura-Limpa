class ProdutoService {
    constructor() {
        this.produtosRef = db.collection('produtos').withConverter(produtoConverter);

        this.produtosLista = document.getElementById('produtosLista');
        this.produtoTabela = document.getElementById('produtosTabela');
        this.loadingDiv = document.getElementById('loading');
    }

    carregarProdutos() {
        this.produtosRef.onSnapshot(
            (snapshot) => this.processarSnapshot(snapshot),
            (error) => this.tratarErro(error)
        )
    }

    //Processa o snapshot
    processarSnapshot(snapshot) {
        this.produtosLista.innerHTML = '';
        this.loadingDiv.style.display = 'none';
        this.produtoTabela.style.display = 'table';

        snapshot.forEach((doc) => {
            const produto = doc.data();
            this.adicionarProdutoNaTabela(produto);
        })
    }

    //Colocar os produtos na tabela 
    adicionarProdutoNaTabela(produto) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>${produto.precoFormatado()}</td>
            <td>${produto.estoque}</td>
            <td>${produto.categoria}</td>
        `;
        this.produtosLista.appendChild(tr); // insere como filho de no momento dentro de tbody id="produtosLista"</tbody>
    }

    //Tratar erro
    tratarErro(error){
        console.log(error);
    }
}