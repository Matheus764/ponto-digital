function entrar(event) {
    event.preventDefault(); // impede o envio tradicional do formulário

    const tipoUsuario = document.querySelector('input[name="tipoUsuario"]:checked');

    if (!tipoUsuario) {
      alert("Selecione o tipo de usuário.");
      return;
    }

    if (tipoUsuario.value === "usuario") {
      window.location.href = "Usuario.html"; // redireciona para funcionário
    } else if (tipoUsuario.value === "admin") {
      window.location.href = "Admin.html"; // redireciona para administrador
    }
  }

  function mostrarFormulario() {
    // Se quiser mostrar/esconder campos com base no tipo de usuário, coloque o código aqui
  }