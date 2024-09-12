function entrarServidor() {
    const countDownDate = new Date("2024-11-17T00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");
    const comingSoonElement = document.getElementById("coming-soon");

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Cálculo do tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibir o tempo restante
        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Quando o temporizador expirar
        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "O tempo acabou!";
            comingSoonElement.style.display = 'none'; // Esconder o texto "EM BREVE"
            alert("Conecte-se ao servidor FlyMC: mi-01.bedhosting.com.br:25591");
        }
    }, 1000);
}

// Seleciona o botão de menu e a lista de navegação
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

// Adiciona o evento de clique ao botão
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu
    menu.classList.toggle('active');
});

// Temporizador (exemplo simples de contagem regressiva)
function entrarServidor() {
    alert("Conectando ao servidor...");
}
