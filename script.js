const flashcardContainer = document.querySelector('.flashcard-container');
const nextButton = document.getElementById('nextButton');
const flashcards = document.querySelectorAll('.flashcard');

let currentCardIndex = 0;

function showCard(index) {
  flashcards.forEach((flashcard, idx) => {
    if (idx === index) {
      flashcard.style.display = 'block';
    } else {
      flashcard.style.display = 'none';
    }
  });

  // Generate and apply a random color to the current card's content
  const randomColor = getRandomColor();
  const cardContent = flashcards[index].querySelector('.flashcard-content');
  cardContent.style.setProperty('--card-content-color', randomColor);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

flashcards.forEach((flashcard) => {
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });
});

nextButton.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  showCard(currentCardIndex);
});

showCard(currentCardIndex);
