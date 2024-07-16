let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() { //
    currentSlide++;
    if (currentSlide >= totalSlides) {
        window.location.href = 'pages/index2.html';
    } else {
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

setInterval(showNextSlide, 3000); // 
