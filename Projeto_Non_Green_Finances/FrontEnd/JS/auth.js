document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: btoa(document.getElementById("password").value) // simulação de hash
      };
      localStorage.setItem(user.email, JSON.stringify(user));
      alert("Usuário registrado!");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = btoa(document.getElementById("password").value);
      const user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
        localStorage.setItem("loggedUser", email);
        window.location.href = "dashboard.html";
      } else {
        alert("Credenciais inválidas");
      }
    });
  }
});
