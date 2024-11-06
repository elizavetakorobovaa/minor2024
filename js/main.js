let translated = true;
function changeLanguage() {
  if (translated) {
    document.getElementById("name").innerText = "Elizaveta";
    document.getElementById("surname").innerText = "Korobova";
    document.getElementById("birthyear").innerText = "2004";
    translated = false;
  } else {
    document.getElementById("name").innerText = "Елизавета";
    document.getElementById("surname").innerText = "Коробова";
    document.getElementById("birthyear").innerText = "2004";
    translated = true;
  }
}
