let translated = true;
function changeLanguage() {
  if (translated) {
    document.getElementById("name").innerText = "Ivan";
    document.getElementById("surname").innerText = "Ivanov";
    document.getElementById("birthyear").innerText = "1970";
    translated = false;
  } else {
    document.getElementById("name").innerText = "Иван";
    document.getElementById("surname").innerText = "Иванов";
    document.getElementById("birthyear").innerText = "1970";
    translated = true;
  }
}
