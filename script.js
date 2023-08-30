$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".navegacao").toggleClass("active");
    });
});

const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.style.transform = `translateX(${(i - index) * 300}px)`;
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

showCard(currentIndex);