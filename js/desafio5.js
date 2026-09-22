// Desafio 5 - Ranking de Preços
let produtosRanking = []; // vetor de objetos { nome, preco }

function adicionarProdutoRanking() {
  const nome = document.getElementById("nomeRanking").value.trim();
  const preco = Number(document.getElementById("precoRanking").value);

  if (nome === "" || preco <= 0) {
    alert("Preencha o nome e um preço válido.");
    return;
  }

  produtosRanking.push({ nome: nome, preco: preco });

  document.getElementById("nomeRanking").value = "";
  document.getElementById("precoRanking").value = "";

  const resultado = document.getElementById("resultado");
  resultado.classList.add("mostrar");
  resultado.innerHTML = `Produto "${nome}" adicionado. Total cadastrado: ${produtosRanking.length}.`;
}

function gerarRanking() {
  const lista = document.getElementById("listaRanking");
  lista.innerHTML = "";

  if (produtosRanking.length === 0) {
    alert("Cadastre pelo menos um produto antes de gerar o ranking.");
    return;
  }

  // Cria uma cópia do vetor e ordena do mais barato para o mais caro
  // (função sort com comparador, conteúdo importante para a arguição técnica)
  const ordenado = [...produtosRanking].sort((a, b) => a.preco - b.preco);

  for (let i = 0; i < ordenado.length; i++) {
    const item = ordenado[i];
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${item.nome} <span class="badge bg-success rounded-pill">R$ ${item.preco.toFixed(2)}</span>`;
    lista.appendChild(li);
  }
}
