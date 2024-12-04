// script.js
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const presetPain = ["Estou me sentido bem, obrigado.", "Estou um pouco cansado.", "Estou com dores no corpo."];
const presetMedical = ["Sim, tomei todos os meus medicamentos.", "Não, esqueci de tomar.", "Preciso de ajuda para tomar meus medicamentos."];
const presetSolicitar = ["Quero solicitar um 'Cuidador'!", "Quero solicitar um 'Acompanhador'!", "Quero solicitar um 'Cuidador/Acompanhador' com 'CARRO'."];
const cadastroColaborador = ["Quero me cadastrar como 'Cuidador'!", "Quero me cadastrar como 'Acompanhador'!", "Quero me cadastrar como 'Cuidador/Acompanhador' com 'CARRO'."];

let currentStep = 0;

const steps = [
    { message: "Bem-vindo(a) ao Cuida-Chat. Você é: 1. Cliente, 2. Cuidador/Acompanhador?", options: ["1", "2"] },
    { message: "Como você está se sentindo hoje?", options: presetPain },
    { message: "Você tomou seus medicamentos hoje?", options: presetMedical },
    { message: "Você deseja solicitar um colaborador?", options: presetSolicitar },
];

function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function handleUserInput() {
    const input = userInput.value.trim();
    if (!input) return;

    addMessage(input, "user");

    const step = steps[currentStep];
    if (step.options.includes(input)) {
        currentStep++;
        if (currentStep < steps.length) {
            addMessage(steps[currentStep].message, "bot");
        } else {
            addMessage("Obrigado por participar!", "bot");
        }
    } else {
        addMessage("Opção inválida. Tente novamente.", "bot");
    }

    userInput.value = "";
}

sendBtn.addEventListener("click", handleUserInput);

// Initialize the chat
addMessage(steps[currentStep].message, "bot");
