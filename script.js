// Lista de números pagos com clientes
const paidNumbers = [
  { number: 29, client: "Gustavo" },
  { number: 98, client: "Thiago" },
  { number: 14, client: "Sara Rodrigues" }
  
  
];

let selectedNumbers = [];

function showPaidClients(clients) {
  const clientList = document.getElementById("client-list");
  clientList.innerHTML = ''; // Limpa a lista

  if (clients.length === 0) {
    clientList.innerHTML = '<p class="text-center">Nenhum cliente encontrado.</p>';
  } else {
    clients.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("client-card");
      card.innerHTML = `
          <h5 class="client-name">${p.client}</h5>
          <p class="client-number">Número: ${p.number}</p>
      `;
      clientList.appendChild(card);
    });
  }
}

function filterClients() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
  const filteredClients = paidNumbers.filter(client =>
    client.client.toLowerCase().includes(searchTerm) ||
    client.number.toString().includes(searchTerm)
  );
  showPaidClients(filteredClients);
}

function generateNumbers() {
  const grid = document.getElementById("num-grid").querySelector(".row");
  for (let i = 1; i <= 100; i++) {
    const button = document.createElement("button");
    button.textContent = i;

    // Marca os números pagos
    const paid = paidNumbers.find(p => p.number === i);
    if (paid) {
      button.classList.add("paid");
      button.disabled = true;
    }

    button.addEventListener("click", () => handleNumberSelection(i, button));

    const col = document.createElement("div");
    col.classList.add("col-4", "col-sm-3", "col-md-2");
    col.appendChild(button);
    grid.appendChild(col);
  }
}

function handleNumberSelection(number, button) {
  if (button.classList.contains("paid")) {
    alert("Este número já foi pago.");
    return;
  }

  // Adicionar ou remover a seleção do número
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    selectedNumbers = selectedNumbers.filter(num => num !== number);
  } else {
    button.classList.add("selected");
    selectedNumbers.push(number);
  }

  // Ativar ou desativar os botões de confirmação e cancelamento
  const confirmButton = document.getElementById("confirm-button");
  const cancelButton = document.getElementById("cancel-button");

  if (selectedNumbers.length > 0) {
    confirmButton.disabled = false;
    cancelButton.disabled = false;

    // Rolando até o botão de confirmar pagamento
    confirmButton.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    confirmButton.disabled = true;
    cancelButton.disabled = true;
  }
}

function confirmPayment() {
  if (selectedNumbers.length === 0) {
    alert("Por favor, selecione ao menos um número para confirmar.");
    return;
  }

  const numbers = selectedNumbers.join(", ");
  const message = `Olá, gostaria de confirmar minha rifa com os números ${numbers}. Qual o valor do pagamento para confirmar?`;
  const whatsappLink = `https://wa.me/5569993073838?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
}

function cancelSelection() {
  const buttons = document.querySelectorAll("#num-grid button.selected");
  buttons.forEach(button => button.classList.remove("selected"));

  selectedNumbers = [];
  const confirmButton = document.getElementById("confirm-button");
  const cancelButton = document.getElementById("cancel-button");

  confirmButton.disabled = true;
  cancelButton.disabled = true;
}

// Eventos dos botões
document.getElementById("confirm-button").addEventListener("click", confirmPayment);
document.getElementById("cancel-button").addEventListener("click", cancelSelection);

// Gerar números e exibir clientes pagos
generateNumbers();
showPaidClients(paidNumbers);
