function validarFormulario() {

const email = document.getElementById("email").value;
const mensagemErro = document.getElementById("mensagemErro");
const iconeErro = document.getElementById("iconeErro");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !regex.test(email)) {
    mensagemErro.classList.remove("invisivel");
    iconeErro.classList.remove("invisivel");
  } else {
    mensagemErro.classList.add("invisivel");
    iconeErro.classList.add("invisivel");
  }
}
