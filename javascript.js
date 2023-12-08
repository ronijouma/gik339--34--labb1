const divStyleCheckbox = document.getElementById('divstyle');
console.log(divStyleCheckbox);  // Skriver ut checkbox-elementet

const textFields = document.querySelectorAll('.input');
console.log(textFields);        // Skriver ut NodeList av textfält

const button = document.getElementsByTagName('button')[0];
console.log(button);            // Skriver ut knappen

const divElement = document.querySelector('.tomdiv');
console.log(divElement);        // Skriver ut div-elementet

function handleInputChange(e) {
    // Skriv ut vilket inputfält som genererade eventet (target)
    console.log("Inputfält som genererade eventet:", e.target);

    // Ta reda på inputfältets name-attribut
    const fieldName = e.target.getAttribute("name");

    // Om name-attributet är "content", skriv ut innehållet (value) i inputfältet till div-elementet
    if (fieldName === "content") {
      const divElement = document.querySelector('.tomdiv');
      divElement.innerHTML = e.target.value;
    }
  }

  // Hämta referensen till inputfältet med id "content"
  const contentInput = document.getElementById('content');

  // Lägg till eventlyssnare för inputfältet som anropar vår funktion
  contentInput.addEventListener('input', handleInputChange);


  // Hämta referensen till checkboxen med id "divstyle"
const divcolor = document.getElementById('divstyle');

// Hämta referensen till input-fältet med namn/id "color"
const colorInput = document.getElementById('color');

// Hämta referensen till div-elementet med klassen "tomdiv"
const div = document.querySelector('.tomdiv');

// Lägg till en eventlyssnare för ändringar i checkboxen
divcolor.addEventListener('change', function () {
  // Hämta färgen från input-fältets value-egenskap
  const selectedColor = colorInput.value;

  // Ändra bakgrundsfärgen på div-elementet till den upphämtade färgen
  div.style.backgroundColor = selectedColor;
});
// Hämta referensen till knappen
const tabort = document.getElementsByTagName('button')[0];

// Lägg till eventlyssnare för klick på knappen
button.addEventListener('click', function () {
  // Hämta referensen till div-elementet med klassen "tomdiv"
  const divElement = document.querySelector('.tomdiv');

  // Ta bort div-elementet
  divElement.remove();
});

textFields.forEach(function (TXT) {
  TXT.addEventListener("input", handleInputChange);
});