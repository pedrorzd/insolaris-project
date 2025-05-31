function calcularArea(event) {
  event.preventDefault();

  const largura = parseFloat(document.getElementById('largura').value);
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const valorLuzMensal = parseFloat(document.getElementById('valorLuzMensal').value);

  const areaPlaca = 2.278 * 1.134;
  const areaDisponivel = largura * comprimento;

  const quantidadePlacas = Math.floor(areaDisponivel / areaPlaca);

  const valorPlacaMedio = 750.00;
  const valorPlacaMinimo = 460.00;
  const valorPlacaMaximo = 966.00;

  const valorTotalMedio = valorPlacaMedio * quantidadePlacas;
  const valorTotalMin = valorPlacaMinimo * quantidadePlacas;
  const valorTotalMax = valorPlacaMaximo * quantidadePlacas;

  const potenciaTotalKw = (400 * quantidadePlacas) / 1000;

  const geracaoMensalKwh = potenciaTotalKw * 4 * 30;

  const economiaMensal = Math.min(geracaoMensalKwh * (valorLuzMensal / geracaoMensalKwh), valorLuzMensal);

  const economiaAnual = economiaMensal * 12;

  const payback = valorTotalMedio / economiaMensal;

  document.getElementById('resultados').style.display = 'block';
  document.getElementById('areaDisponivel').textContent = `Área disponível: ${areaDisponivel.toFixed(2)} m²`;
  document.getElementById('quantidadePlacas').textContent = `Quantidade de placas: ${quantidadePlacas}`;
  document.getElementById('valorTotalMedio').textContent = `Valor total (médio): R$ ${valorTotalMedio.toFixed(2)}`;
  document.getElementById('valorTotalMin').textContent = `Valor total (mínimo): R$ ${valorTotalMin.toFixed(2)}`;
  document.getElementById('valorTotalMax').textContent = `Valor total (máximo): R$ ${valorTotalMax.toFixed(2)}`;
  document.getElementById('energiaMensal').textContent = `Energia mensal gerada: ${geracaoMensalKwh.toFixed(2)} kWh`;
  document.getElementById('economiaMensal').textContent = `Economia mensal estimada: R$ ${economiaMensal.toFixed(2)}`;
  document.getElementById('economiaAnual').textContent = `Economia anual estimada: R$ ${economiaAnual.toFixed(2)}`;
  document.getElementById('payback').textContent = `Tempo estimado para payback: ${payback.toFixed(2)} meses`;
}