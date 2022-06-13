const resultado = document.querySelector(' .result');
const confirmar = document.querySelector(' .igual');
const previa = document.querySelector(' .previa');
function insert(valor) {
  resultado.innerHTML += valor;
  previa.innerHTML += valor;
  document.getElementById('prev').innerHTML = eval(previa.innerHTML);
}

function clean() {
  resultado.innerHTML = '';
  previa.innerHTML = '';
}

function backspace() {
  if (resultado.textContent) {
    let result = document.getElementById('resultado').innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
  } else {
  }
}

function confirma() {
  if (resultado.textContent != 'Erro') {
    document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
    previa.innerHTML = '';
  }
}
