function weather() {
    const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&exclude=hourly,minutely&units=imperial&appid=bc1fadc8c6b67e4cff5d985d1fbf498c";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {        
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        const description = jsObject.current.weather[0].description;
        let temp = Math.round(jsObject.current.temp);
        let humidity = jsObject.current.humidity;
        let alerts = jsObject.alerts;
        
        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
        document.querySelector('#weatherIcon').setAttribute('alt', description);
        document.querySelector('#currentWeather').textContent = description;
        document.querySelector('#temp').textContent = `${temp} \u00B0F`;
        document.querySelector('#humidity').textContent = `${humidity}%`;

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let d1 = new Date();
        let d2 = new Date(Date.now() + ( 3600 * 1000 * 24));
        let d3 = new Date(Date.now() + ( 3600 * 1000 * 48));

        document.querySelector('#day1').textContent = weekday[d1.getDay()];
        document.querySelector('#day2').textContent = weekday[d2.getDay()];
        document.querySelector('#day3').textContent = weekday[d3.getDay()];
        document.querySelector('#weather1').textContent = `${temp} \u00B0F`;
        document.querySelector('#weather2').textContent = `${temp} \u00B0F`;
        document.querySelector('#weather3').textContent = `${temp} \u00B0F`;

        if (alerts != undefined) {
          alert(alerts);
        };
   });
}