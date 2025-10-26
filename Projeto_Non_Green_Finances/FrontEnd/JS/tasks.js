import { api } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const list = document.getElementById("taskList");
  const search = document.getElementById("searchTask");

  const renderTasks = () => {
    const tasks = api.getTasks();
    list.innerHTML = "";
    tasks.forEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.title} - ${t.status}`;
      const del = document.createElement("button");
      del.textContent = "Excluir";
      del.onclick = () => { api.deleteTask(t.title); renderTasks(); };
      li.appendChild(del);
      list.appendChild(li);
    });
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const status = document.getElementById("taskStatus").value;
    api.addTask({ title, status });
    renderTasks();
    form.reset();
  });

  search.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    const tasks = api.getTasks().filter(t => t.title.toLowerCase().includes(q));
    list.innerHTML = tasks.map(t => `<li>${t.title} - ${t.status}</li>`).join("");
  });

  renderTasks();
});
