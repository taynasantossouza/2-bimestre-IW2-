const produtosLoja= [
    
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 100 },
    { id: 3, nome: "Teclado", preco: 200 },
];

let produtosCarrinho = [];

function renderizarProdutos() {
    let Lista = document.getElementById("lista-produtos");
    Lista.innerHTML = "";

    produtosLoja.forEach(p => {
        const div = document.createElement("div");
        div.className ="product";

        div.innerHTML=`
        <span>${p.nome} - R$ ${p.preco}</span>
        <button onclick = "adicionarAoCarrinho(${p.id})">Adcionar</button>
        `;
        Lista.appendChild(div);

        
        
    });
    
}
renderizarProdutos();

function adicionarAoCarrinho(id){
    const produto = produtosLoja.find(prod => prod.id == id);

    const existente = produtosCarrinho.find(prod => prod.id == id);

    if(existente){
        //Aumentar a quantidade
        existente.quantidade++;
    }
    else{
        //Criar o protudo no carrinho
        produtosCarrinho.push(
            {
                //Meu novo produto no carrinho
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: 1
            }
        )
    }
}

function renderizaCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let somaTotal = 0;

    produtosCarrinho.forEach(produto => {
        somaTotal = somaTotal + (produto.preco * produto.quantidade) 

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            
        `;
    })
}