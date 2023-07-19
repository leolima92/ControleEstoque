// Seletor do botão "Comece agora"
var startButton = document.querySelector('.start-button');

// Função de redirecionamento para a página de login
function redirectToLoginPage() {
  window.location.href = 'http://127.0.0.1:5500/LoginPage/ingexlog.html'; // Substitua 'pagina-de-login.html' pela URL da sua página de login
}

// Evento de clique no botão
startButton.addEventListener('click', redirectToLoginPage);

