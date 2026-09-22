// Desafio 2 - Aplicação de Descontos

function aplicarDesconto() {
  const valorCompra = Number(document.getElementById("valorCompra").value);
  const percentual = Number(document.getElementById("percentualDesconto").value);

  if (valorCompra <= 0) {
    alert("Informe um valor de compra válido.");
    return;
  }

  // Desconto do cupom informado pelo usuário
  let valorDesconto = valorCompra * (percentual / 100);
  let percentualTotal = percentual;

  // Estrutura condicional: bônus para compras acima de R$ 300
  let bonusAplicado = false;
  if (valorCompra > 300) {
    valorDesconto += valorCompra * 0.05; // +5% de desconto extra
    percentualTotal += 5;
    bonusAplicado = true;
  }

  const valorFinal = valorCompra - valorDesconto;

  const resultado = document.getElementById("resultado");
  resultado.classList.add("mostrar");
  resultado.innerHTML = `
    Desconto aplicado: <strong>${percentualTotal}%</strong> (R$ ${valorDesconto.toFixed(2)})<br>
    ${bonusAplicado ? "🎉 Bônus de 5% aplicado por compra acima de R$ 300!<br>" : ""}
    Valor final a pagar: <strong>R$ ${valorFinal.toFixed(2)}</strong>
  `;
}
