const form = document.getElementById("form-numeros");

function validaNumero(numeroA, numeroB) {
  return numeroB > numeroA;
}

form.addEventListener("submit", function (e) {
  let formEValido = true;
  e.preventDefault();

  const numeroA = document.getElementById("numero-a").value;
  const numeroB = document.getElementById("numero-b").value;
  const mensagemSucesso = `Tudo certo com o seu formulário! O número B (${numeroB}) é maior que o número A (${numeroA})`;
  const mensagemErro = `Alto lá! O formulário não é válido pois o número B (${numeroB}) não é maior que o número A (${numeroA})`;

  formEValido = validaNumero(numeroA, numeroB);
  if (formEValido) {
    // alert(mensagemSucesso);
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
  } else {
    const containerMensagemErro = document.querySelector(".error-message");
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = "block";
  }
});
