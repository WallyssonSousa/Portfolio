function abrirWhatsapp() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var url = "https://wa.me/5511997135477?text=" // Seu numero
      + "Mensagem" + "%0a" // Mensagem personalizada
      + "Nome: " + nome + "%0a" // Dados do formulário
      + "E-mail: " + email + "%0a"
      + "Assunto: " + assunto;

    window.open(url, '_blank').focus();
  }