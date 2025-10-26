from fastapi import FastAPI

app = FastAPI(
    title="TaskManager API",
    description="API RESTful do sistema de gerenciamento de tarefas",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "API pronta para integração futura"}

    document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideCount = document.querySelectorAll(".slide").length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
});

