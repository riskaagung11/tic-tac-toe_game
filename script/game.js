function starNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please sert custom player names for both players!");
    return;
  }
  gameAreaElement.style.display = "block";
}
