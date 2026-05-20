const produtosLoja = [
    { id: 1, nome: "Notebook 💻", preco: 3000 },
    { id: 2, nome: "Mouse 🖰", preco: 100 },
    { id: 3, nome: "Teclado ⌨️", preco: 200 },
    { id: 4, nome: "Celular 📱", preco: 3000 }
  ];

  // CARRINHO (ARRAY PRINCIPAL)
  let produtosCarrinho  = [];

  function renderizarProdutos() {
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    produtosLoja.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <span>${p.nome} - R$ ${p.preco}</span>
        <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
      `;
      
      lista.appendChild(div);
    });
  }
 
  // INICIALIZAÇÃO
  renderizarProdutos();

  function adicionarAoCarrinho(id) {
      const produto = produtosLoja.find(
        prod => prod.id == id
      );

      const existe = produtosCarrinho .find(
        prod => prod.id == id
      );

      if (existe) {
        existe.quantidade++;
      }
      else {
        produtosCarrinho .push({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1
        });
      }

      renderizarCarrinho();
  }

  function renderizarCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");
    let somaTotal = 0;

    listaCarrinho.innerHTML = "";

    produtosCarrinho .forEach(produto => {
      //Atualizar o total
      somaTotal += produto.preco * produto.quantidade;

      const div = document.createElement("div");
      div.className = "cart-item";  

      div.innerHTML = `
        <span>${produto.nome} (x${produto.quantidade})
            - R$ ${produto.preco * produto.quantidade}
        </span>
        <div>
            <button onclick="mudarQuantidade(${produto.id}, 1)">
                +
            </button>
            <button onclick="mudarQuantidade(${produto.id}, -1)">
                -
            </button>
            <button onclick="removerDoCarrinho(${produto.id})">
                Remover
            </button>
        </div>
      `;

      listaCarrinho.appendChild(div);
    });

    total.textContent = "Total: R$ " + somaTotal;
  }

  function mudarQuantidade(id, valor) {
      produtosCarrinho = produtosCarrinho .map(produto => {
        if (produto.id == id) {
            return {
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade + valor
            }
        }
        return produto;
      }).filter(produto => produto.quantidade > 0 )

      renderizarCarrinho();
  }

  function removerDoCarrinho(id){
    produtosCarrinho = produtosCarrinho.filter(produto => produto.id != id);
    renderizarCarrinho();
  }

  const limpar = document.getElementById("limpar");
  limpar.addEventListener("click", function(){
    if(produtosCarrinho.length > 0){
        produtosCarrinho = [];
        renderizarCarrinho();
    }
  });

  const comprar = document.getElementById("comprar");
  comprar.addEventListener("click", function(){

    let textoAlerta = document.getElementById("texto-comprar"); 
    
    if(produtosCarrinho.length > 0){
        produtosCarrinho = [];
        renderizarCarrinho();

        textoAlerta.textContent = "Sucesso na compra!";
        textoAlerta.style.color = "green";
    }
    else{
        textoAlerta.textContent = "Sem ítens para compra!";
        textoAlerta.style.color = "red";

    }

  })
