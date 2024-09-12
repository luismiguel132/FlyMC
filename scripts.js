function entrarServidor() {
    const countDownDate = new Date("2024-11-17T00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");
    const comingSoonElement = document.getElementById("coming-soon");

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "O tempo acabou!";
            comingSoonElement.style.display = 'none';
            alert("Conecte-se ao servidor FlyMC: mi-01.bedhosting.com.br:25591");
        }
    }, 1000);
}

// Seleção de menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
