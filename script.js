// Função para o contador regressivo
function countdown() {
    const hoursElement1 = document.getElementById('hours1');
    const minutesElement1 = document.getElementById('minutes1');
    const secondsElement1 = document.getElementById('seconds1');

    const hoursElement2 = document.getElementById('hours2');
    const minutesElement2 = document.getElementById('minutes2');
    const secondsElement2 = document.getElementById('seconds2');

    let hours = 24;
    let minutes = 59;
    let seconds = 59;

    // Atualiza ambos os relógios com as horas iniciais
    updateClock(hoursElement1, minutesElement1, secondsElement1, hours, minutes, seconds);
    updateClock(hoursElement2, minutesElement2, secondsElement2, hours, minutes, seconds);

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }

        // Atualiza ambos os relógios a cada segundo
        updateClock(hoursElement1, minutesElement1, secondsElement1, hours, minutes, seconds);
        updateClock(hoursElement2, minutesElement2, secondsElement2, hours, minutes, seconds);
    }, 1000);
}

// Função auxiliar para atualizar os elementos do relógio
function updateClock(hoursElement, minutesElement, secondsElement, hours, minutes, seconds) {
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Chama a função de contador regressivo
countdown();










$(document).ready(function () {
    // Função para controlar o carrossel
    function handleCarousel(carouselId, numSlides, autoSlideInterval = 3000) {
        const $carouselContainer = $(`#${carouselId} .carousel-container`);
        const $carouselSlides = $carouselContainer.find(".carousel-slide");
        const $prevBtn = $(`#${carouselId} .carousel-prev`);
        const $nextBtn = $(`#${carouselId} .carousel-next`);
        const $thumbnails = $(`#${carouselId} .carousel-thumbnails img`);

        let currentSlide = 0;
        let autoSlideTimer;

        // Função para atualizar a exibição dos slides e miniaturas
        function updateCarousel() {
            $carouselSlides.hide();
            $thumbnails.removeClass("active");
            $($carouselSlides[currentSlide]).fadeIn();
            $($thumbnails[currentSlide]).addClass("active");
        }

        // Função para avançar para o próximo slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % numSlides;
            updateCarousel();
        }

        // Função para voltar ao slide anterior
        function prevSlide() {
            currentSlide = (currentSlide - 1 + numSlides) % numSlides;
            updateCarousel();
        }

        // Clique no botão de próximo
        $nextBtn.on("click", function () {
            clearTimeout(autoSlideTimer);
            nextSlide();
            autoSlide();
        });

        // Clique no botão anterior
        $prevBtn.on("click", function () {
            clearTimeout(autoSlideTimer);
            prevSlide();
            autoSlide();
        });

        // Clique nas miniaturas
        $thumbnails.on("click", function () {
            const slideIndex = $(this).data("slide");
            if (slideIndex !== currentSlide) {
                clearTimeout(autoSlideTimer);
                currentSlide = slideIndex;
                updateCarousel();
                autoSlide();
            }
        });

        // Função para avançar automaticamente
        function autoSlide() {
            clearTimeout(autoSlideTimer);
            autoSlideTimer = setTimeout(function () {
                nextSlide();
                autoSlide();
            }, autoSlideInterval);
        }

        // Inicialização
        updateCarousel();
        autoSlide();
    }

    // Inicializar o carrossel com 4 imagens
    handleCarousel("carousel1", 4, 5000); // Intervalo de 5 segundos

    // Inicializar o carrossel com 8 imagens
    handleCarousel("testimonialCarousel", 8, 4000); // Intervalo de 4 segundos
});






function toggleResposta(index) {
    const respostas = document.querySelectorAll(".resposta");
    const pergunta = respostas[index].parentNode;
    pergunta.classList.toggle("active");
}
