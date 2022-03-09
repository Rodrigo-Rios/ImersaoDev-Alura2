let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function convertFahr() {
  let saidaCelsius = parseFloat(celsius.value) * 1.8 + 32;

  fahrenheit.value = parseFloat(saidaCelsius.toFixed(2));
}

function convertCelsius() {
  let saidaFahrenheit = (parseFloat(fahrenheit.value) - 32) / 1.8;

  celsius.value = parseFloat(saidaFahrenheit.toFixed(2));
}