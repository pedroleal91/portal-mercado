// Desafio 3 - Controle de Estoque
// Vetor de objetos que representa o estoque do mercado
let estoque = [];

function movimentarEstoque(tipo) {
  const nome = document.getElementById("nomeEstoque").value.trim();
  const quantidade = Number(document.getElementById("qtdEstoque").value);
  const resultado = document.getElementById("resultado");

  if (nome === "" || quantidade <= 0) {
    alert("Preencha o nome e uma quantidade válida.");
    return;
  }

  // Procura se o produto já existe no estoque (percorrendo o array)
  let produtoExistente = null;
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome.toLowerCase() === nome.toLowerCase()) {
      produtoExistente = estoque[i];
      break;
    }
  }

  if (tipo === "entrada") {
    if (produtoExistente) {
      produtoExistente.quantidade += quantidade;
    } else {
      // Adiciona um novo produto ao vetor
      estoque.push({ nome: nome, quantidade: quantidade });
    }
    resultado.classList.add("mostrar");
    resultado.innerHTML = `Entrada registrada: +${quantidade} de "${nome}".`;
  } else {
    // Saída de estoque
    if (!produtoExistente) {
      alert("Esse produto ainda não existe no estoque.");
      return;
    }
    if (produtoExistente.quantidade < quantidade) {
      alert("Quantidade insuficiente em estoque para essa saída.");
      return;
    }
    produtoExistente.quantidade -= quantidade;
    resultado.classList.add("mostrar");
    resultado.innerHTML = `Saída registrada: -${quantidade} de "${nome}".`;
  }

  atualizarTabelaEstoque();
  document.getElementById("nomeEstoque").value = "";
  document.getElementById("qtdEstoque").value = 1;
}

function atualizarTabelaEstoque() {
  const tabela = document.getElementById("tabelaEstoque");
  tabela.innerHTML = "";

  for (let i = 0; i < estoque.length; i++) {
    const item = estoque[i];
    const linha = document.createElement("tr");
    // Destaca em vermelho quando o estoque está baixo (menos de 5 unidades)
    if (item.quantidade < 5) {
      linha.classList.add("table-danger");
    }
    linha.innerHTML = `<td>${item.nome}</td><td>${item.quantidade}</td>`;
    tabela.appendChild(linha);
  }
}
