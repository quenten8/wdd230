function getWeather() {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Queen Creek&units=imperial&appid=bc1fadc8c6b67e4cff5d985d1fbf498c";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        document.getElementById("current-weather").innerHTML = jsObject.main.temp;
        
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const description = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
        document.querySelector('#weatherIcon').setAttribute('alt', description);
        document.querySelector('#iconText').textContent = description;
      });


}