const STORAGE_KEY = "expenses";

const form = document.getElementById("expense-form");
const list = document.getElementById("list");
const totalEl = document.getElementById("total");
const countEl = document.getElementById("count");

const exportBtn = document.getElementById("export-btn");
const importFile = document.getElementById("import-file");

function getExpenses() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveExpenses(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function render() {
  const data = getExpenses();

  list.innerHTML = "";
  let total = 0;

  data.forEach((e) => {
    total += Number(e.amount);

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <strong>${e.type}</strong> - ${e.amount} €
      <br> ${e.date} - ${e.vehicle}
      <br> Km: ${e.mileage || "-"}
      <br> ${e.comment || ""}
      <button class="delete" data-id="${e.id}">Supprimer</button>
    `;

    list.appendChild(div);
  });

  totalEl.textContent = total.toFixed(2) + " €";
  countEl.textContent = data.length;

  document.querySelectorAll(".delete").forEach(btn => {
    btn.onclick = () => deleteExpense(btn.dataset.id);
  });
}

function addExpense(e) {
  e.preventDefault();

  const newExpense = {
    id: Date.now().toString(),
    date: date.value,
    vehicle: vehicle.value,
    type: type.value,
    amount: amount.value,
    mileage: mileage.value,
    comment: comment.value
  };

  const data = getExpenses();
  data.push(newExpense);
  saveExpenses(data);

  form.reset();
  render();
}

function deleteExpense(id) {
  const data = getExpenses().filter(e => e.id !== id);
  saveExpenses(data);
  render();
}

function exportJSON() {
  const data = JSON.stringify(getExpenses(), null, 2);
  const blob = new Blob([data], { type: "application/json" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "depenses.json";
  a.click();
}

function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      saveExpenses(data);
      render();
      alert("Import réussi !");
    } catch {
      alert("Fichier invalide");
    }
  };

  reader.readAsText(file);
}

form.addEventListener("submit", addExpense);
exportBtn.addEventListener("click", exportJSON);
importFile.addEventListener("change", importJSON);

render();