document.addEventListener("DOMContentLoaded", () => {
    // Verifica se a tabela existe no HTML antes de tentar manipulá-la
    const addressTable = document.querySelector("#address-table");

    if (!addressTable) {
        console.error("Erro: Elemento #address-table não encontrado.");
        return;
    }

    atualizarTabela();
});

const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const orderSelect = document.querySelector("#order-by");
const addressTable = document.querySelector("#address-table tbody");

const closeButton = document.querySelector("#close-message");




// Validar apenas números no CEP
cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);
    if (!onlyNumbers.test(key)) {
        e.preventDefault();
    }
});

// Buscar endereço ao digitar CEP
cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    if (inputValue.length === 8) {
        getAddress(inputValue);
    }
});

// Função para buscar endereço via API do ViaCEP
const getAddress = async (cep) => {
    toggleLoader();
    cepInput.blur();

    if (!/^\d{8}$/.test(cep)) {
        toggleMessage("CEP inválido! Digite um CEP com 8 dígitos.");
        toggleLoader();
        return;
    }

    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://viacep.com.br/ws/${cep}/json/`)}`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("Erro ao acessar a API do ViaCEP.");
        }

        const rawData = await response.json();
        const data = JSON.parse(rawData.contents);

        if (data.erro) {
            throw new Error("CEP não encontrado. Tente novamente.");
        }

        addressInput.value = data.logradouro || "";
        cityInput.value = data.localidade || "";
        neighborhoodInput.value = data.bairro || "";
        regionInput.value = data.uf || "";

    } catch (error) {
        console.error("Erro:", error);
        toggleMessage(error.message);
    } finally {
        toggleLoader();
    }
};

// Habilitar/desabilitar campos do formulário
const toggleDisabled = () => {
    formInputs.forEach((input) => {
        input.toggleAttribute("disabled");
    });
};

// Exibir ou esconder o loader
const toggleLoader = () => {
    document.querySelector("#fade").classList.toggle("hide");
    document.querySelector("#loader").classList.toggle("hide");
};

// Exibir mensagens
const toggleMessage = (msg) => {
    document.querySelector("#message p").innerText = msg;
    document.querySelector("#fade").classList.toggle("hide");
    document.querySelector("#message").classList.toggle("hide");
};

// Fechar mensagem modal
closeButton.addEventListener("click", () => toggleMessage());


