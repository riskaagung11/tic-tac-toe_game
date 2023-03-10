function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatePlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
  updatePlayerDataElement.children[1].textContent = enteredPlayerName;

  // if (editedPlayer === 1) {
  //   player[0].name = enteredPlayerName;
  // } else {
  //   player[1].name = enteredPlayerName;
  // }

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
