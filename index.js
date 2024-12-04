//consts cliente
const presetPain = [
    "Estou me sentido bem, obrigado.",
    "Estou um pouco cansado.",
    "Estou com dores no corpo."
];

const presetMedical = [
    "Sim, tomei todos os meus medicamentos.",
    "Não, esqueci de tomar.",
    "Preciso de ajuda para tomar meus medicamentos."
];

const presetSolicitar = [
    "Quero solicitar um 'Cuidador'!",
    "Quero solicitar um 'Acompanhador'!",  
    "Quero solicitar um 'Cuidador/Acompanhador' com 'CARRO'."
];

//consts cuidador/acompanhador
const cadastroColaborador = [
    "Quero me cadastrar como 'Cuidador'!",
    "Quero me cadastrar como 'Acompanhador'!",
    "Quero me cadastrar como 'Cuidador/Acompanhador' com 'CARRO'."
];

const presetCertificao = [
    "Sim, tenho certificação!",
    "Não tenho certificação!.",
    "Não tenho certificação, mas pretendo fazer uma."
];

const presetCNH = [
    "Sim, tenho CNH!",
    "Não tenho CNH!.",
    "Não tenho CNH, mas pretendo fazer uma."
];

// Prompt inicial para o tipo de usuário
function getUserType() {
    const response = prompt(
        "Bem vindo(a) ao Cuida-Chat. Digite 1, se é cliente. Digite 2, se você é Cuidador/Acompanhador."
    );
    return parseInt(response);
}

function usuario() {
    // Mostrar opções como lista numerada para melhor UX
    const painOptions = presetPain
        .map((option, index) => `${index + 1}. ${option}`) //map retorna um novo array com as respostas
        .join('\n'); // join transforma elementos do array em 'string'.
    
    const medicalOptions = presetMedical
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');

    const solicitarOptions = presetSolicitar
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');
    const cadastroOptions = cadastroColaborador
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');

    // Obter respostas do usuário (subtrair 1 para corresponder ao índice do array)
    const painResponse = parseInt(prompt(
        "Como você está se sentindo hoje?\n" + painOptions
    )) - 1;

    const medicalResponse = parseInt(prompt(
        "Você tomou seus medicamentos hoje?\n" + medicalOptions
    )) - 1;

    const solicitarResponse = parseInt(prompt(
        "Você deseja solicitar um colaborador?\n" + solicitarOptions
    )) - 1;

    const cadastroResponse = parseInt(prompt(
        "Você deseja se cadastrar como colaborador?\n" + cadastroOptions
    )) - 1;

    // Validar respostas
    if (isValidResponse(painResponse, presetPain) && 
        isValidResponse(medicalResponse, presetMedical) &&
        isValidResponse(solicitarResponse, presetSolicitar) &&
        isValidResponse(cadastroResponse, cadastroColaborador)) {
        
        return {
            pain: presetPain[painResponse],
            medical: presetMedical[medicalResponse],
            solicitar: presetSolicitar[solicitarResponse],
            cadastro: cadastroColaborador[cadastroResponse]
        };
    }
    
    return null;
}
  // Mostrar opções como lista numerada para melhor UX p/ colaborador
function freelancer() {
    const cadastroColaboradorOptions = cadastroColaborador
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');

    const certificacaoOptions = presetCertificao
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');

    const cnhOptions = presetCNH
        .map((option, index) => `${index + 1}. ${option}`)
        .join('\n');

// Obter respostas do colaborador (subtrair 1 para corresponder ao índice do array)
    const cadastroColaboradorResponse = parseInt(prompt(
        "Você deseja se cadastrar como colaborador?\n" + cadastroColaboradorOptions
    )) - 1;

    const certificacaoResponse = parseInt(prompt(
        "Você possui certificação?\n" + certificacaoOptions
    )) - 1;

    const cnhResponse = parseInt(prompt(
        "Você possui CNH?\n" + cnhOptions
    )) - 1;

    //Validar as respostas
    if (isValidResponse(cadastroColaboradorResponse, cadastroColaborador) &&
        isValidResponse(certificacaoResponse, presetCertificao) &&
        isValidResponse(cnhResponse, presetCNH)) {

        return {
            cadastroColaborador: cadastroColaborador[cadastroColaboradorResponse],
            certificacao: presetCertificao[certificacaoResponse],
            cnh: presetCNH[cnhResponse]
        };
    }

    return null;
}

function isValidResponse(response, array) {
    return response >= 0 && response < array.length;
}

function iniciarQuiz() {
    const userType = getUserType();

    if (isNaN(userType) || (userType !== 1 && userType !== 2)) {
        alert("Opção inválida! Por favor, digite 1 ou 2.");
        return;
    }

    switch (userType) {
        case 1:
            const responses = usuario();//chamada da função para o usuario/cliente
            if (responses) {
                alert("Obrigado pela colaboração!");
                console.log('Respostas:', responses);
            } else {
                alert("Respostas inválidas. Por favor, tente novamente.");
            }
            break;
        
        case 2:
            const responsesColaborador = freelancer();// Chamada da função para o colaborador
            if (responsesColaborador) {
                console.log('Respostas:', responsesColaborador);
            } else {
                alert("Respostas inválidas. Por favor, tente novamente.");
            }
        
        case 3:
            alert("Obrigado por nos escolher, por favor responda ao nosso Quiz!");
            break;
        default:
            alert("Opção inválida!");
    }
}

// Inicializar o quiz
iniciarQuiz();
