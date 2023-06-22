function convertCelsius() {
  var celsiusInput = document.getElementById("inputCelsius");
  var result = document.getElementById("outputKalkulasi")

  if (celsiusInput.value === "" || isNaN(celsiusInput.value)) {
    alert("Please enter a valid temperature in Celsius Value")
    resetFields();
    return
  } else {
    //Convert Celsius to Farenheit
    var celsius = parseFloat(celsiusInput.value);
    var farenheit = (celsius * 9) / 5 + 32;

    // Display hasil 
    result.textContent = "Hasil : " + celsius + "℃ = " + farenheit + "℉";
    logic.textContent = "Caranya yaitu :" + farenheit + "℉ : " + celsius + "℃ * (9/5) + 32"
  }
}

function reverseFarenheit() {
  resetFields();
}

//Celsius to Farenheit, Farenheit to Celsius
function reverseFarenheit() {
  resetFields();
  var farenheitInput = document.getElementById("inputCelsius")
  var label = document.querySelector('label[for="inputCelsius"]')
  var convertButton = document.querySelector(
    'button[onclick="convertCelsius()"]'
  )
  var reverseButton = document.querySelector(
    'button[onclick="reverseFarenheit()"]'
  )
// Merubah label dan input Plcaeholder ke Farenheit
label.textContent = "Farenheit :"
farenheitInput.placeholder = "Enter temperature in Farenheit"

//Merubah "onclick" dari convert dan reverse button
convertButton.setAttribute("onclick", "convertFarenheit()")
reverseButton.setAttribute("onclick", "reverseCelsius()")
} 

// Used to convert Farenheit to Celsius
function convertFarenheit() {
  var farenheitInput = document.getElementById("inputCelsius")
  var result = document.getElementById("outputKalkulasi")
  var logic = document.getElementById("logic")

// Cek Input farenheit agar tidak kosong dan hanya nomor
if (farenheitInput.value || isNaN(farenheitInput.value)) {
  alert("Please enter a valid temperture in Farenheit")
  return
} 

// Convert Farenheit ke Celsius
var farenheit = parseFloat(farenheitInput.value)
var celsius = ((farenheit - 32) * 5) / 9

// Display the result
result.textContent = "Hasil : " + farenheit + "℉ =" + celsius + "℃"
logic.textContent = 
  "Caranya yaitu :" + celsius + "℃ : " + farenheit + "℉ - 32 * 5/9"
}

// function use to clear input, result, and logic value
function resetFields() {
  var input = document.getElementById("inputCelsius")
  var result = document.getElementById("outputKalkulasi")
  var logic = document.getElementById("logic")

  input.value = ""
  result.textContent = ""
  logic.textContent = ""
}