document.getElementById("btnClassificar").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let xp = Number(document.getElementById("xp").value);
  let nivel = "";

  if (!nome || xp <= 0) {
    document.getElementById("resultado").textContent = "Por favor, preencha o nome e o XP corretamente.";
    return;
  }

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  document.getElementById("resultado").textContent =
    `🦸 O Herói de nome ${nome} está no nível de ${nivel}!`;
});
