//uppgift 4 

const divStyleCheckbox = document.getElementById('divstyle');


const textFields = document.querySelectorAll('.input');

const button = document.getElementsByTagName('button')[0];

const divElement = document.querySelector('.tomdiv');
      

function handleInputChange(e) {
    console.log("Inputfält som genererade eventet:", e.target);

    textFields.forEach(function (TXT) {
      TXT.addEventListener("input", handleInputChange);
    });


    const fieldName = e.target.getAttribute("name");

    if (fieldName === "content") {
      const divElement = document.querySelector('.tomdiv');
      divElement.innerHTML = e.target.value;
    }
  }

  const contentInput = document.getElementById('content');

  contentInput.addEventListener('input', handleInputChange);


const divcolor = document.getElementById('divstyle');

const colorInput = document.getElementById('color');

const div = document.querySelector('.tomdiv');

divcolor.addEventListener('change', function () {
  const selectedColor = colorInput.value;

  div.style.backgroundColor = selectedColor;
});


const tabort = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {

  const divElement = document.querySelector('.tomdiv');

  divElement.remove();
});

