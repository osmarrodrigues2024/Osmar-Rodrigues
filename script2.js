document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');


    clearErrors();


    if (nomeInput.value.trim() === '') {
        showError(nomeInput, 'Campo obrigatório');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Campo obrigatório');
        isValid = false;
    }


    if (isValid) {
        alert('Formulário enviado com sucesso!');

    }
});

function showError(input, message) {
    input.classList.add('error ');
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}


function clearErrors() {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    inputs.forEach(input => {
        input.classList.remove('error'); melha
    });

    errorMessages.forEach(message => {
        message.style.display = 'none';
    });
}
