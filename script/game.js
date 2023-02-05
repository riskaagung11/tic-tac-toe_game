function starNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please sert custom player names for both players!");
    return;
  }
  activePlayerGameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerGameElement.textContent = players[activePlayer].name;
}
function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disable");
  switchPlayer();
}
