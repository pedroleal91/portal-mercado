// Desafio 1 - Total da Compra
// Vetor (array) que guarda os produtos adicionados ao carrinho
let carrinho = [];

function adicionarProduto() {
  const nome = document.getElementById("nomeProduto").value;
  const quantidade = Number(document.getElementById("qtdProduto").value);
  const preco = Number(document.getElementById("precoProduto").value);

  // Validação simples dos campos
  if (nome.trim() === "" || quantidade <= 0 || preco <= 0) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Cria um objeto representando o produto e adiciona ao array
  const produto = {
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    subtotal: quantidade * preco
  };

  carrinho.push(produto);

  atualizarTabela();
  limparCampos();
}

function atualizarTabela() {
  const tabela = document.getElementById("tabelaCarrinho");
  tabela.innerHTML = ""; // limpa a tabela antes de redesenhar

  // Percorre o array com um laço de repetição (for) e cria uma linha por item
  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.quantidade}</td>
      <td>R$ ${item.preco.toFixed(2)}</td>
      <td>R$ ${item.subtotal.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  }
}

function calcularTotal() {
  if (carrinho.length === 0) {
    alert("Adicione ao menos um produto antes de calcular o total.");
    return;
  }

  // Soma todos os subtotais do array usando reduce (estrutura de repetição interna)
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].subtotal;
  }

  const resultado = document.getElementById("resultado");
  resultado.classList.add("mostrar");
  resultado.innerHTML = `Total da compra (${carrinho.length} item(ns)): <strong>R$ ${total.toFixed(2)}</strong>`;
}

function limparCampos() {
  document.getElementById("nomeProduto").value = "";
  document.getElementById("qtdProduto").value = 1;
  document.getElementById("precoProduto").value = "";
  document.getElementById("nomeProduto").focus();
}
