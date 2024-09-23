const cards = [
  { id: 'luffy1', imgFront: '../../becajulio2024/images/luffy1.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'luffy2', imgFront: '../../becajulio2024/images/luffy1.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'zoro1', imgFront: '../../becajulio2024/images/zoro.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'zoro2', imgFront: '../../becajulio2024/images/zoro.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'nami1', imgFront: '../../becajulio2024/images/nami.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'nami2', imgFront: '../../becajulio2024/images/nami.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'ussop1', imgFront: '../../becajulio2024/images/ussop.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'ussop2', imgFront: '../../becajulio2024/images/ussop.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'sanji1', imgFront: '../../becajulio2024/images/sanji.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'sanji2', imgFront: '../../becajulio2024/images/sanji.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'chopper1', imgFront: '../../becajulio2024/images/chopper.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'chopper2', imgFront: '../../becajulio2024/images/chopper.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'robin1', imgFront: '../../becajulio2024/images/robin.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'robin2', imgFront: '../../becajulio2024/images/robin.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'franky1', imgFront: '../../becajulio2024/images/franky.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'franky2', imgFront: '../../becajulio2024/images/franky.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'brook1', imgFront: '../../becajulio2024/images/brook.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'brook2', imgFront: '../../becajulio2024/images/brook.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'jinbe1', imgFront: '../../becajulio2024/images/jinbe.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'jinbe2', imgFront: '../../becajulio2024/images/jinbe.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'vivi1', imgFront: '../../becajulio2024/images/vivi.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'vivi2', imgFront: '../../becajulio2024/images/vivi.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'yamato1', imgFront: '../../becajulio2024/images/yamato.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'yamato2', imgFront: '../../becajulio2024/images/yamato.jpg', imgBack: '../../becajulio2024/images/back.jpg' }
];

const iconsPlayers = [
  {id: 'luffy', icon: '../../becajulio2024/images/luffyicon.jpg'},
  {id: 'franky', icon: '../../becajulio2024/images/iconfranky.jpg'},
  {id: 'brook', icon: '../../becajulio2024/images/brookicon.jpg'},
  {id: 'nami', icon: '../../becajulio2024/images/namiicon.jpg'},
  {id: 'jinbe', icon: '../../becajulio2024/images/jinbeicon.jpg'},
]

const maxPoints = 12;
let flippedCards = [];
let resolvedCards = [];
let currentPlayer = 1;
let player1Points = 0;
let player2Points = 0;
let totalPoints = 0;
let player1; 
let player2; 
let iconPlayer1; 
let iconPlayer2; 

//Mostrar modal
document.addEventListener('DOMContentLoaded', function () {
  startGame();
  generateAvatarHTML(iconsPlayers, "avatarPlayer1"); 
  generateAvatarHTML(iconsPlayers, "avatarPlayer2"); 
});

function startGame() {
  let modalSetPlayers = new bootstrap.Modal(document.getElementById('modalSetPlayers'), {
    backdrop: 'static',
    keyboard: false
  });
  modalSetPlayers.show();
  document.getElementById('playersForm').addEventListener('submit', function (event) {
    event.preventDefault();
   
    setPlayers();
    modalSetPlayers.hide();
  });
}

function selectAvatar(element){
  selectAvatarVisually(element); 

  let parentId = element.parentElement.id;
  let  iconSrc = element.querySelector('img').src; 

  if (parentId === "avatarPlayer1") {
    selectedIconPlayer1 = iconSrc;
    document.getElementById('player1Icon').src = selectedIconPlayer1;
  } else if (parentId === "avatarPlayer2") {
    selectedIconPlayer2 = iconSrc;
    document.getElementById('player2Icon').src = selectedIconPlayer2;
  }
}

function selectAvatarVisually(element){
  let parent = element.parentElement; 
  let children = parent.children; 
  if(parent.id === "avatarPlayer1"){
    for(let child of children){
      if (child !== element && child.classList.contains('player1turn')){
        child.classList.remove('player1turn'); 
      }
    }
    element.classList.add('player1turn');
  }else{
    for(let child of children){
      if (child !== element && child.classList.contains('player2turn')){
        child.classList.remove('player2turn'); 
      }
    }
   element.classList.add('player2turn');
  }
}

function setPlayers() {
  player1 = document.getElementById('inputPlayer1Name').value;
  player2 = document.getElementById('inputPlayer2Name').value;


  document.getElementById('playerName1').innerHTML = player1;
  document.getElementById('playerName2').innerHTML = player2;
  document.getElementById('playerPoints1').innerHTML = player1Points;
  document.getElementById('playerPoints2').innerHTML = player2Points;
}

function generateAvatarHTML(icons, container) {
  const iconContainer = document.getElementById(container);
  iconContainer.innerHTML = '';
  icons.forEach(icon => {
    const iconHTML = `
            <div class="col-2 card p-0" id="${icon.id}" onclick="selectAvatar(this)">
             <div class="card-body">
              <img src="${icon.icon}" class="img-fluid" alt="">
              </div>
            </div>
          `;
    iconContainer.innerHTML += iconHTML;
    console.log(icon.icon);
  });
}

function playerTurn(element) {
  if (flippedCards.length < 2) {
    changeTurnVisual();
    turnUp(element);
  }
}

function changeTurnVisual() {
  document.getElementById('playerTurn').innerHTML = "Turno del jugador: " + currentPlayer;
  if (currentPlayer == 1) {
    document.getElementById('player1Card').classList.add('player1turn');
    document.getElementById('player2Card').classList.remove('player2turn');
  } else {
    document.getElementById('player1Card').classList.remove('player1turn');
    document.getElementById('player2Card').classList.add('player2turn');
  }
}

function turnUp(element) {
  if (flippedCards.length < 2) {
    checkFlippedAndPush(element);
    markElementPlayerTurn(element); 
  }

  if (flippedCards.length === 2) {
    setTimeout(() => {
      let points = compareCards();
      playerTurnAction(points);
    }, 500);
  }
}

function playerTurnAction(points) {
  if (points === 0) {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    changeTurnVisual();

  } else {
    if (currentPlayer === 1) {
      player1Points = addPlayerPoints(player1Points, 'playerPoints1');  
    } else {
      player2Points = addPlayerPoints(player2Points, 'playerPoints2');
    }
  }
  if (totalPoints == maxPoints) {
    showWinnerModal();
  }
}

function addPlayerPoints(playerPoints, elementId) {
  playerPoints++;
  totalPoints++;
  document.getElementById(elementId).innerHTML = playerPoints;
  return playerPoints; 
}

function markElementPlayerTurn(element){
  if(currentPlayer == 1){
    element.classList.add('player1turn');
  }else{
    element.classList.add('player2turn');
  }
}

function checkFlippedAndPush(element) {
  if (element.classList.contains('flipped')) {
    return;
  }

  if (!element.classList.contains('show-back')) {
    flipCards(element);
    flippedCards.push(element.id.slice(0, -1));
  }

}

function flipCards(element) {
  element.classList.add('show-back');
  element.classList.add('flipped');
}

function compareCards() {
  let points = 0;
  if (flippedCards[0] === flippedCards[1]) {
    disabledCards();
    addCardsToResolved();
    points = 1; 
  } else {
    resetCardsFlipped();
  }

  flippedCards = [];
  return points;
}

function resetCardsFlipped() {
  const cards = document.querySelectorAll('.flipped');
  const player = currentPlayer; 
  cards.forEach(card => {
    if (!card.classList.contains('blocked')) {
      setTimeout(() => {
        card.classList.remove('show-back', 'flipped');
        removePlayerMark(player, card);
      }, 500);
    }

  });
}

function removePlayerMark(player, card) {
  if (player == 1) {
    card.classList.remove('player1turn');
  } else {
    card.classList.remove('player2turn');
  }
}

function disabledCards() {
  let cards = document.querySelectorAll('.flipped');
  cards.forEach(card => {
    card.style.pointerEvents = 'none';
    card.classList.add('blocked');
  });

}

function addCardsToResolved() {
  resolvedCards.push(flippedCards[0]);
  resolvedCards.push(flippedCards[1]);
  flippedCards = [];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateCardHTML(cards) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  cards.forEach(card => {
    const cardHTML = `
            <div class="col-2 card p-0" id="${card.id}" onclick="playerTurn(this)">
             <div class="card-body">
              <img src="${card.imgFront}" class="img-fluid frontside" alt="">
              <img src="${card.imgBack}" class="img-fluid backside" alt="">
              </div>
            </div>
          `;
    cardContainer.innerHTML += cardHTML;
  });
}

const shuffledCards = shuffle(cards);
generateCardHTML(shuffledCards);

function showWinnerModal() {
  //Mostrar modal
  let winnerModal = new bootstrap.Modal(document.getElementById('modalWinner'), {
    backdrop: 'static',
    keyboard: false
  });
  winnerModal.show();
  showWinner();
  winnerModal.hide();
}

function showWinner() {
  if (player1Points > player2Points) {
    document.getElementById('winner').innerHTML = "Has ganado " + player1 + "!";
    document.getElementById('winnerPoints').innerHTML = "Con " + player1Points + " puntos!";
    document.getElementById('winnerImg').src = "../images/youwin.jpg";
  } else if (player1Points < player2Points) {
    document.getElementById('winner').innerHTML = "Has ganado " + player2 + "!";
    document.getElementById('winnerPoints').innerHTML = "Con " + player2Points + " puntos!";
    document.getElementById('winnerImg').src = "../images/youwin.jpg";
  } else {
    document.getElementById('winner').innerHTML = "Empate!";
    document.getElementById('winnerImg').src = "../images/drawgame.jpg";
  }
}

function resetGame() {
  generateCardHTML(shuffledCards);
  flippedCards = [];
  resolvedCards = [];
  currentPlayer = 1;
  player1Points = 0;
  player2Points = 0;
  totalPoints = 0;
  document.getElementById('winner').innerHTML = "";
  document.getElementById('winnerPoints').innerHTML = "" ;
  startGame();
  changeTurnVisual(); 
  console.log(player1Points, player2Points);

}



