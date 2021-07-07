// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let button = document.getElementById("formSubmit");
   let resultsArea = document.getElementById("faultyItems");
   let pilotStat = document.getElementById("pilotStatus");
   let copilotStat = document.getElementById("copilotStatus");
   form.addEventListener("submit", function(event) {
     let pilotNameInput = document.querySelector("input[name=pilotName]");
     let copilotNameInput = document.querySelector("input[name=copilotName]");
     let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
     let cargoMassInput = document.querySelector("input[name=cargoMass]");
     let launchUpdate = document.getElementById("launchStatus");
      event.preventDefault();
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
         alert("Please Enter Text!");
      }
      if (isNaN(fuelLevelInput.value)||isNaN(cargoMassInput.value)){
         alert("Please Enter Numbers!");
      }
      if(fuelLevelInput.value < 10000){
         document.getElementById("fuelStatus").innerHTML = "there is not enough fuel for the journey";
         launchUpdate.innerHTML = "Shuttle not ready for launch";
         launchUpdate.style.color = "red"; 
         makeVisible();
      }
      if(cargoMassInput.value>10000){
         document.getElementById("cargoStatus").innerHTML = "there is too much mass for the shuttle to take off.";
         launchUpdate.innerHTML = "Shuttle not ready for launch";
         launchUpdate.style.color = "red";
         makeVisible();

      }
      if (fuelLevelInput.value >= 10000 && cargoMassInput.value < 10000){
         pilotStat.innerHTML = `${pilotNameInput.value} is Ready`;
         copilotStat.innerHTML = `${copilotNameInput.value} is Ready`;
         launchUpdate.innerHTML = "Shuttle is ready for Launch";
         launchUpdate.style.color = "green"; 
         makeVisible();
      //   thePlanet();
         
      }
   });

   function planetaryInfo(){
      const div = document.getElementById("PlantetaryData");
let theData = [];
      for (let a = 0; a<5; a++){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         theData.push(json[a]);
      });
   });
   return {
      name: theData.name,
      diameter: theData.diameter,
      star: theData.star,
      distance: theData.distance,
      moons: theData.moons,
   }
      }
   }

    function thePlanet(){
       planetaryInfo();
       window.alert(JSON.stringify(variable))
         div.innerHTML=`
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${theData.name}</li>
         <li>Diameter: ${theData.diameter}</li>
         <li>Star: ${theData.star}</li>
         <li>Distance from Earth: ${theData.distance}</li>
         <li>Number of Moons: ${theData.moons}</li>
      </ol>
      `;
    }
   
}

function makeVisible(){
     resultsArea.style.visibility = "visible";
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
