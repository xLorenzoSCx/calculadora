function somar() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 + v2;

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

function subtrair() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 - v2;

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

function multiplicar() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 * v2;

  document.getElementById("resultado").innerText = `resultado: ${resultado}`;
}

function dividir() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 / v2;

  document.getElementById("resultado").innerText = `resultado: ${resultado}`;
}

function resto() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 % v2;

  document.getElementById("resultado").innerText = `resultado: ${resultado}`;
}

function potencia() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const resultado = v1 ** v2;
  document.getElementById("resultado").innerText = `resultado: ${resultado}`;
}
