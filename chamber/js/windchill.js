function windChill() {
//Get and display temperature and wind speed
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Queen Creek&units=imperial&appid=bc1fadc8c6b67e4cff5d985d1fbf498c";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {        
        const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;
        const description = jsObject.weather[0].description;
        let temp = jsObject.main.temp;
        let speed = jsObject.wind.speed;
        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
        document.querySelector('#weatherIcon').setAttribute('alt', description);
        document.querySelector('#currentWeather').textContent = description;
        document.querySelector('#temp').textContent = `${temp} \u00B0F`;
        document.querySelector('#speed').textContent = speed;
//Calculate windchill
    let chill;
    if (temp <= 50 && speed > 3) {
        chill = Math.round(35.74+0.6215*temp-35.75*Math.pow(speed,0.16)+0.4275*temp*Math.pow(speed,0.16)*100)/100 + " \u00B0F";
    } else {
        chill = "N/A";
    }
    document.getElementById("chill").innerHTML= chill;
   });
}