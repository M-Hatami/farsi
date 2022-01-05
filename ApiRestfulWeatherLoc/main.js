// Foursquare API Info
const apiKey = 'fsq3geFCmXO9TSbaZW7j6CpiZ0/DhJrQfr5cUM4peRRzH9Y='
const url = 'https://api.foursquare.com/v3/places/search';

// OpenWeather Info
const openWeatherKey = '83499238f0090bef888656da6e7fccb0';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const options = { method: 'GET', headers: { Accept: 'application/json', Authorization: apiKey } };
    const urlToFetch = `${url}?near=${city}&limit=10`;
    try {
        const response = await fetch(urlToFetch, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const venues = jsonResponse.results;
            console.log(venues);
            return venues;
        }
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        console.log(venueIcon);
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.locality}</h2>`);
}

const renderForecast = (day) => {
    const weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then((venues) => renderVenues(venues));
    getForecast().then((forecast) => renderForecast(forecast));
    return false;
}

$submit.click(executeSearch)