// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let button = document.getElementById("formSubmit");
   form.addEventListener("submit", function(event) {
     let pilotNameInput = document.querySelector("input[name=pilotName]");
     let copilotNameInput = document.querySelector("input[name=copilotName]");
     let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
     let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
         alert("Please Enter Text!");
         event.preventDefault();
      }
      if (isNaN(fuelLevelInput.value)||isNaN(cargoMassInput.value)){
         alert("Please Enter Numbers!");
         event.preventDefault();
      }
   });
   
   let resultsArea = document.getElementById("faultyItems");
  button.addEventListener("click", function(){
     makeVisible();

  });
  function makeVisible(){
     resultsArea.style.display = "visible";
  }


 });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
