
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  //isMatch ? disableCards() : { unflipCards(); alert("abc")}
  if (isMatch && firstCard.dataset.framework === "laranja") {
    funcao1();
    disableCards() ; 
  } else if(isMatch && firstCard.dataset.framework === "melancia"){
    funcao2();
    disableCards() ;
  }else if(isMatch && firstCard.dataset.framework === "maçã"){
  funcao3();
  disableCards() ;
  }else if(isMatch && firstCard.dataset.framework === "abacaxi"){
    funcao4();
  disableCards() ;
  }else if(isMatch && firstCard.dataset.framework === "cenoura"){
    funcao5();
    disableCards();
  }else if(isMatch && firstCard.dataset.framework === "brócolis"){
    funcao6();
    disableCards();
  }else if(isMatch && firstCard.dataset.framework === "batata"){
    funcao7();
    disableCards();
    }else if(isMatch && firstCard.dataset.framework === "beringela"){
    funcao8();
    disableCards();
  }else{
    unflipCards(); 

   
    //window.open('html com a info do pop.html', label)
  }


}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));



