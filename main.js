function validateForm() {
  const email = document.getElementById("email").value;
  const mensagemErro = document.getElementById("mensagemErro");
  const iconeErro = document.getElementById("iconeErro");

  if (email === "") {
    mensagemErro.classList.remove("invisivel");
    iconeErro.classList.remove("invisivel");
    console.log(mensagemErro.classList);
    console.log(iconeErro.classList);
  } else {
    mensagemErro.classList.add("invisivel");
    iconeErro.classList.add("invisivel");
  }
}
