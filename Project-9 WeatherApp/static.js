const key = "42b07ad03bf5cb6a5cc2e9200e7ac44a";
var city = "jamshedpur";

var url = "api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key;
var url2 = 'api.openweathermap.org/data/2.5/weather?q=jamshedpur&appid=42b07ad03bf5cb6a5cc2e9200e7ac44a';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });
