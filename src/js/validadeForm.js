const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()
})

function validadeForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    alert('Mensagem enviada com sucesso.')
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return true;
}
