const modal = document.getElementById("modal");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const btnCreateTask = document.getElementById("btn-create-task");
const alertElement = document.getElementById("alert");

function createTask(e) {
  e.preventDefault();

  if (!inputDescription.value || !inputDate.value) {
    alertElement.style.display = "block";
    closeAlertTime();
    return;
  }

  const newTask = {
    description: inputDescription.value,
    date: new Date(inputDate.value).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    }),
    id: Math.floor(Math.random() * 10000),
  };

  const allTasks = getTasks();

  setTasks([...allTasks, newTask]);

  reload();
  toggleModal();
  clearFields();
}

function toggleModal() {
  modal.classList.toggle("modal-visible");
}

function clearFields() {
  inputDate.value = "";
  inputDescription.value = "";
}

function closeAlertTime() {
  setTimeout(() => {
    alertElement.style.display = "none";
  }, 3000);
}

btnCreateTask.addEventListener("click", createTask);
