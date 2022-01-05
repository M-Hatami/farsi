const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>نشانی:</h3>
    <p>${location.address}</p>
    <p>${location.locality}</p>
    <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>دما: ${kelvinToCelsius(currentDay.main.temp)}&deg;</h2>
          <h2>وضعیت: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
const kelvinToCelsius = valNum => (parseFloat(valNum) - 273.15).toFixed(0);