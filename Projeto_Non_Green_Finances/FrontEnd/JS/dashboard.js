import { api } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("taskChart").getContext("2d");
  const tasks = api.getTasks();

  const pendentes = tasks.filter(t => t.status === "pendente").length;
  const concluidas = tasks.filter(t => t.status === "concluída").length;

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Pendentes", "Concluídas"],
      datasets: [{
        data: [pendentes, concluidas],
        backgroundColor: ["#ff9800", "#4caf50"]
      }]
    }
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
  });
});
