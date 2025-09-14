// script.js - Arquivo JavaScript externo

// Esperar o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // Elementos do DOM
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Elementos de erro
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Expressão regular para validar email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Adicionar evento de submit ao formulário
  contactForm.addEventListener("submit", function (event) {
    // Impedir envio padrão do formulário
    event.preventDefault();

    // Resetar mensagens de erro
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validar campos
    let isValid = true;

    // Validar nome
    const nameValue = document.getElementById("name").value.trim();
    if (nameValue.length < 2) {
      nameError.style.display = "block";
      isValid = false;
    }

    // Validar email
    const emailValue = document.getElementById("email").value.trim();
    if (!emailPattern.test(emailValue)) {
      emailError.style.display = "block";
      isValid = false;
    }

    // Validar mensagem
    const messageValue = document.getElementById("message").value.trim();
    if (messageValue.length < 10) {
      messageError.style.display = "block";
      isValid = false;
    }

    // Se o formulário for válido, processar o envio
    if (isValid) {
      // Simular envio (substitua por código real de envio)
      console.log("Dados do formulário:");
      console.log("Nome:", nameValue);
      console.log("Email:", emailValue);
      console.log("Mensagem:", messageValue);

      // Mostrar mensagem de sucesso
      successMessage.style.display = "block";

      // Esconder a mensagem após 5 segundos
      setTimeout(function () {
        successMessage.style.display = "none";
      }, 5000);

      // Limpar o formulário
      contactForm.reset();
    }
  });

  // Validação em tempo real
  document.getElementById("name").addEventListener("input", function () {
    if (this.value.trim().length >= 2) {
      nameError.style.display = "none";
    }
  });

  document.getElementById("email").addEventListener("input", function () {
    if (emailPattern.test(this.value.trim())) {
      emailError.style.display = "none";
    }
  });

  document.getElementById("message").addEventListener("input", function () {
    if (this.value.trim().length >= 10) {
      messageError.style.display = "none";
    }
  });
});