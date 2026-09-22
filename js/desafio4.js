// Desafio 4 - Produto Mais Vendido
let vendas = []; // vetor de objetos { nome, quantidade }

function adicionarVenda() {
  const nome = document.getElementById("nomeVenda").value.trim();
  const quantidade = Number(document.getElementById("qtdVenda").value);

  if (nome === "" || quantidade <= 0) {
    alert("Preencha o nome e uma quantidade válida.");
    return;
  }

  vendas.push({ nome: nome, quantidade: quantidade });
  atualizarTabelaVendas();

  document.getElementById("nomeVenda").value = "";
  document.getElementById("qtdVenda").value = 1;
}

function atualizarTabelaVendas() {
  const tabela = document.getElementById("tabelaVendas");
  tabela.innerHTML = "";

  for (let i = 0; i < vendas.length; i++) {
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${vendas[i].nome}</td><td>${vendas[i].quantidade}</td>`;
    tabela.appendChild(linha);
  }
}

function calcularMaisVendido() {
  const resultado = document.getElementById("resultado");

  if (vendas.length === 0) {
    alert("Cadastre pelo menos um produto vendido.");
    return;
  }

  // Percorre o vetor para encontrar o índice com maior quantidade vendida
  let indiceMaior = 0;
  for (let i = 1; i < vendas.length; i++) {
    if (vendas[i].quantidade > vendas[indiceMaior].quantidade) {
      indiceMaior = i;
    }
  }

  const maisVendido = vendas[indiceMaior];

  resultado.classList.add("mostrar");
  resultado.innerHTML = `
    🏆 Produto mais vendido: <strong>${maisVendido.nome}</strong>
    (${maisVendido.quantidade} unidades vendidas)
  `;
}
