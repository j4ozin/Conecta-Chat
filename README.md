# Conecta-Chat
Código base para o chat-bot do Cuida &amp; Conecta.


# Explicação do Código - Cuida-Chat parte (JS)

Este projeto simula um chatbot chamado **Cuida-Chat**, projetado para interagir com dois tipos de usuários: **clientes** e **cuidadores/acompanhadores**. O programa utiliza prompts para coletar respostas e exibir informações organizadas.

---

## Estrutura Geral do Código

O programa é composto por:

1. **Arrays de opções predefinidas:** Contêm as respostas possíveis para perguntas específicas.
2. **Funções de interação:** Coletam respostas do usuário e validam as entradas.
3. **Função principal (`iniciarQuiz`):** Organiza o fluxo do programa.

---

## **1. Arrays de Opções Predefinidas**

### **Descrição:**
Os arrays armazenam as opções que serão apresentadas ao usuário. Cada array representa uma categoria de perguntas.

### **Exemplo:**
```javascript
const presetPain = [
    "Estou me sentido bem, obrigado.",
    "Estou um pouco cansado.",
    "Estou com dores no corpo."
];
````
# **Outros Arrays:**
presetMedical: Opções sobre ingestão de medicamentos.
presetSolicitar: Solicitações de colaboradores por clientes.
cadastroColaborador: Cadastro para cuidadores/acompanhadores.

# **Função getUserType**
### Descrição:
Solicita ao usuário que escolha o tipo (cliente ou cuidador/acompanhador) e retorna a escolha como um número.

```javascript
function getUserType() {
    const response = prompt(
        "Bem vindo(a) ao Cuida-Chat. Digite 1, se é cliente. Digite 2, se você é Cuidador/Acompanhador."
    );
    return parseInt(response);
}
````

# **Funcionamento:**
Exibe uma mensagem com opções numeradas.
Recebe a entrada do usuário com prompt.
Converte a entrada para número inteiro usando parseInt.

# **Função usuario**
**Descrição:**
Coleta respostas do cliente para perguntas específicas.

**Etapas:**
**Formata as opções:**

Usa .map() para numerar cada item.
Usa .join('\n') para exibir as opções separadas por quebras de linha.

```javascript
const painOptions = presetPain
    .map((option, index) => `${index + 1}. ${option}`)
    .join('\n');
````
**Recebe as respostas:**

Para cada categoria, exibe as opções e solicita a escolha do usuário.
Ajusta a escolha para um índice válido subtraindo 1.

**Valida as respostas:**

Chama isValidResponse() para garantir que a escolha está dentro dos limites do array.
Retorna as respostas:

Se válidas, retorna um objeto contendo as escolhas do usuário:
```javascript
return {
    pain: presetPain[painResponse],
    medical: presetMedical[medicalResponse],
    solicitar: presetSolicitar[solicitarResponse],
    cadastro: cadastroColaborador[cadastroResponse]
};
````
**Respostas inválidas:**

Retorna null se alguma resposta for inválida.


# **Função isValidResponse**
**Descrição:**
Valida se a resposta do usuário é válida para o array correspondente.

**Código:**
```javascript
Copiar código
function isValidResponse(response, array) {
    return response >= 0 && response < array.length;
}
````

**Funcionamento:**
Verifica se o índice (response) está entre 0 e o tamanho do array (array.length).
Retorna true para respostas válidas e false caso contrário.

# **Função iniciarQuiz**
**Descrição:**
Função principal que organiza o fluxo do programa.

# **Etapas:**
**Identifica o tipo de usuário:**

Chama ``getUserType()`` para determinar se o usuário é cliente ou cuidador/acompanhador.

# **Valida a entrada:**

**Exibe uma mensagem de erro para entradas inválidas:**

``alert("Opção inválida! Por favor, digite 1 ou 2.");``

# **Fluxo para cada tipo de usuário:**
**Clientes (case 1):**

Chama a função usuario() para coletar respostas.
Se as respostas forem válidas, exibe uma mensagem de agradecimento e imprime as respostas no console:

``console.log('Respostas:', responses);``

**Cuidadores/acompanhadores (case 2):**
Exibe uma mensagem específica de agradecimento.

**Opção inválida:**
Exibe uma mensagem de erro para opções fora do esperado.

```javascript
function iniciarQuiz() {
    const userType = getUserType();``

    if (isNaN(userType) || (userType !== 1 && userType !== 2)) {
        alert("Opção inválida! Por favor, digite 1 ou 2.");
        return;
    }

    switch (userType) {
        case 1:
            const responses = usuario();
            if (responses) {
                alert("Obrigado pela colaboração!");
                console.log('Respostas:', responses);
            } else {
                alert("Respostas inválidas. Por favor, tente novamente.");
            }
            break;
        case 2:
            alert("Obrigado por nos escolher, por favor responda ao nosso Quiz!");
            break;
        default:
            alert("Opção inválida!");
    }
``}
````

