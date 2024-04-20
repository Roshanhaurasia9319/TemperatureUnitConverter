
let inputValue;
function convert() {
     let outputValue;
     
     inputValue = parseFloat(document.getElementById("display1").value);
     let choice;
try{
      choice = document.querySelector('input[name="conversion"]:checked').value;
}
catch(err){
     alert("Error 404");
}

     // console.log(inputValue)
     console.log(choice)
     switch (choice) {
          case 'celciousTokelvin':
               outputValue = inputValue + 273.15;
               break;
          case 'celciousTofahrenite':
               outputValue = (inputValue + 9 / 5) + 32;
               break;
          case 'kelvinTocelcious':
               outputValue = inputValue - 273.15;
          case 'kelvinTofahrenite':
               outputValue = (inputValue - 273.15) * 9 / 5 + 32;
               break;
          case 'fahreniteTocelcious':
               outputValue = (inputValue - 32) * 5 / 9;
               break;
          case 'fahreniteTokelvin':
               outputValue = (inputValue - 32) * 5 / 9 + 273.15;
               break;
     }


     // document.getElementById("display2").innerHTML = `Converted value: ${outputValue.toFixed(2)}`;
     console.log(outputValue);
     let display = document.getElementById("display2");
     display.value = outputValue;
}


document.getElementById("btn").addEventListener("click", () => {

         
          convert();
})