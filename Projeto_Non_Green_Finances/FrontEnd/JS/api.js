// Simula API REST — salva tudo em localStorage

export const api = {
  getTasks: () => JSON.parse(localStorage.getItem("tasks") || "[]"),
  saveTasks: (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks)),
  addTask: (task) => {
    const tasks = api.getTasks();
    tasks.push(task);
    api.saveTasks(tasks);
  },
  deleteTask: (title) => {
    const tasks = api.getTasks().filter(t => t.title !== title);
    api.saveTasks(tasks);
  }
};
