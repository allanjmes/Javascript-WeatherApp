const cityForm = document.querySelector("form");
const locationDetails = document.querySelector(".location-wrapper");
const dateTimeDetails = document.querySelector(".right");
// const tempDetails = document.querySelector(".weather-temp");
const weatherTempDetails = document.querySelector(".weather-temp");

const forecastElement1 = document.querySelector(".outside-1");
const forecastBtn1 = document.querySelector(".inside-1");
const forecastElement2 = document.querySelector(".outside-2");
const forecastBtn2 = document.querySelector(".inside-2");
const forecastElement3 = document.querySelector(".outside-3");
const forecastBtn3 = document.querySelector(".inside-3");
const forecastElement4 = document.querySelector(".outside-4");
const forecastBtn4 = document.querySelector(".inside-4");
const forecastElement5 = document.querySelector(".outside-5");
const forecastBtn5 = document.querySelector(".inside-5");

// toggle forecast container --start--
const toggleForecastBtn1 = () => {
  forecastBtn1.classList.toggle('active');
}
const toggleForecastBtn2 = () => {
  forecastBtn2.classList.toggle('active');
}
const toggleForecastBtn3 = () => {
  forecastBtn3.classList.toggle('active');
}
const toggleForecastBtn4 = () => {
  forecastBtn4.classList.toggle('active');
}
const toggleForecastBtn5 = () => {
  forecastBtn5.classList.toggle('active');
}


forecastElement1.addEventListener('click', toggleForecastBtn1);
forecastElement2.addEventListener('click', toggleForecastBtn2);
forecastElement3.addEventListener('click', toggleForecastBtn3);
forecastElement4.addEventListener('click', toggleForecastBtn4);
forecastElement5.addEventListener('click', toggleForecastBtn5);
// toggle forecast container --end--

const updateUI = (data) => {
  const cityDets = data.cityDetails;
  const weather = data.cityWeather[0];
  const forecastDets = data.cityForecast.DailyForecasts;

  // updating date time --start--
  // ${weekdayDate[1].toLocaleDateString('en-US', dateOption)}
  const forecastDate = [new Date(forecastDets[0].Date), new Date(forecastDets[1].Date), new Date(forecastDets[2].Date), new Date(forecastDets[3].Date), new Date(forecastDets[4].Date)];
  const weekdayDate = { weekday: 'long' };

  // updating date --end--

  // updating location and weather text --start--
  const locationElement = document.querySelector(".location-wrapper");

  locationElement.innerHTML = `
    <p class="location-details">${cityDets.EnglishName}, ${cityDets.Country.ID}</p>
    <p class="weather-phrase">${weather.WeatherText}</p>
  `;
  // updating location and weather text --end--

  // updating weather icon --start--
  const weatherIconElement = document.querySelector(".weather-icon");

  weatherIconElement.innerHTML = `
    <img src="./images/${weather.WeatherIcon}.png" alt="">
  `;
  // updating weather icon --end--

  // updating weather values --start--
  const weatherValueElement = document.querySelector(".weather-value");

  weatherValueElement.innerHTML = `
    <div class="bottom">
      <div class="weather-temp-wrapper">
        <span class="weather-temp">${Math.round(weather.Temperature.Metric.Value)}°${weather.Temperature.Metric.Unit}</span>
      </div>
    
      <div class="weather-title">
        <p class="weather-wind">Wind</p>
        <p class="weather-real-feel">Real Feel</p>
        <p class="weather-visibility">Visibility</p>
      </div>
    
      <div class="weather-value-data">
        <p class="weather-wind-value">${weather.Wind.Speed.Metric.Value}${weather.Wind.Speed.Metric.Unit}</p>
        <p class="weather-real-feel-value">${weather.RealFeelTemperature.Metric.Value}°${weather.RealFeelTemperature.Metric.Unit}</p>
        <p class="weather-visibility-value">${weather.Visibility.Metric.Value}${weather.Visibility.Metric.Unit}</p>
      </div>

    </div>
  `;
  // updating weather values --end--

  // updating sun and moon --start--
  const sunSet = [new Date(forecastDets[0].Sun.Set), new Date(forecastDets[1].Sun.Set), new Date(forecastDets[2].Sun.Set), new Date(forecastDets[3].Sun.Set), new Date(forecastDets[4].Sun.Set)];
  const moonRise = [new Date(forecastDets[0].Moon.Rise), new Date(forecastDets[1].Moon.Rise), new Date(forecastDets[2].Moon.Rise), new Date(forecastDets[3].Moon.Rise), new Date(forecastDets[4].Moon.Rise)];
  const moonSet = [new Date(forecastDets[0].Moon.Set), new Date(forecastDets[1].Moon.Set), new Date(forecastDets[2].Moon.Set), new Date(forecastDets[3].Moon.Set), new Date(forecastDets[4].Moon.Set)];
  const timeOption = { hour: 'numeric', minute: '2-digit', hour12: 'true' };
  // updating sun and moon --end--

  // udpdating daily forecast --start--

  // forecast 1
  forecastElement1.innerHTML = `
    <div class="forecast-content-wrapper forecast-value-1">
      <div class="left">
        <span class="forecast-weather-icon-1">
          <img src="./images/${forecastDets[0].Day.Icon}.png" alt="">
        </span>
        <span class="title">
          Today
        </span>
      </div>
      <div class="right">
        <span class="short-phrase">
          ${forecastDets[0].Day.IconPhrase}
        </span>
        <span class="min-max-temp">
          ${Math.round(forecastDets[0].Temperature.Minimum.Value)}°${forecastDets[0].Temperature.Minimum.Unit} / ${Math.round(forecastDets[0].Temperature.Maximum.Value)}°${forecastDets[0].Temperature.Maximum.Unit}
        </span>
      </div>
    </div>
  `;

  const forecastInside1 = document.querySelector(".forecast-data-value-inside-1");

  forecastInside1.innerHTML = `
    <div class="daytime-container">
      <div class="daytime-title">
        Daytime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="hours-of-sun">Hours of Sun</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[0].Day.Wind.Speed.Value}${forecastDets[0].Day.Wind.Speed.Unit}</p>
            <p class="hours-of-sun-value">${forecastDets[0].HoursOfSun}hrs</p>
            <p class="cloud-cover-value">${forecastDets[0].Day.CloudCover}%</p>
          </div>
        </div>
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="sun-set">Sun Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[0].RealFeelTemperature.Maximum.Value)}°${forecastDets[0].RealFeelTemperature.Maximum.Unit}</p>
            <p class="sun-set-value">${sunSet[0].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[0].Day.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="nightime-container">
      <div class="daytime-title">
        Nightime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="moon-rise">Moon Rise</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[0].Night.Wind.Speed.Value}${forecastDets[0].Night.Wind.Speed.Unit}</p>
            <p class="moon-rise-value">${moonRise[0].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="cloud-cover-value">${forecastDets[0].Night.CloudCover}%</p>
          </div>
        </div>
    
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="moon-set">Moon Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[0].RealFeelTemperature.Minimum.Value)}°${forecastDets[0].RealFeelTemperature.Minimum.Unit}</p>
            <p class="moon-set-value">${moonSet[0].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[0].Night.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // forecast 2
  forecastElement2.innerHTML = `
    <div class="forecast-content-wrapper forecast-value-2">
      <div class="left">
        <span class="forecast-weather-icon-2">
          <img src="./images/${forecastDets[1].Day.Icon}.png" alt="">
        </span>
        <span class="title">
          ${forecastDate[1].toLocaleDateString('en-US', weekdayDate)}
        </span>
      </div>
      <div class="right">
        <span class="short-phrase">
          ${forecastDets[1].Day.IconPhrase}
        </span>
        <span class="min-max-temp">
          ${Math.round(forecastDets[1].Temperature.Minimum.Value)}°${forecastDets[1].Temperature.Minimum.Unit} / ${Math.round(forecastDets[1].Temperature.Maximum.Value)}°${forecastDets[1].Temperature.Maximum.Unit}
        </span>
      </div>
    </div>
  `;

  const forecastInside2 = document.querySelector(".forecast-data-value-inside-2");

  forecastInside2.innerHTML = `
    <div class="daytime-container">
      <div class="daytime-title">
        Daytime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="hours-of-sun">Hours of Sun</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[1].Day.Wind.Speed.Value}${forecastDets[1].Day.Wind.Speed.Unit}</p>
            <p class="hours-of-sun-value">${forecastDets[1].HoursOfSun}hrs</p>
            <p class="cloud-cover-value">${forecastDets[1].Day.CloudCover}%</p>
          </div>
        </div>
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="sun-set">Sun Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[1].RealFeelTemperature.Maximum.Value)}°${forecastDets[1].RealFeelTemperature.Maximum.Unit}</p>
            <p class="sun-set-value">${sunSet[1].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[1].Day.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="nightime-container">
      <div class="daytime-title">
        Nightime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="moon-rise">Moon Rise</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[1].Night.Wind.Speed.Value}${forecastDets[1].Night.Wind.Speed.Unit}</p>
            <p class="moon-rise-value">${moonRise[1].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="cloud-cover-value">${forecastDets[1].Night.CloudCover}%</p>
          </div>
        </div>
    
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="moon-set">Moon Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[1].RealFeelTemperature.Minimum.Value)}°${forecastDets[1].RealFeelTemperature.Minimum.Unit}</p>
            <p class="moon-set-value">${moonSet[1].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[1].Night.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // forecast 3
  forecastElement3.innerHTML = `
    <div class="forecast-content-wrapper forecast-value-3">
      <div class="left">
        <span class="forecast-weather-icon-3">
          <img src="./images/${forecastDets[2].Day.Icon}.png" alt="">
        </span>
        <span class="title">
          ${forecastDate[2].toLocaleDateString('en-US', weekdayDate)}
        </span>
      </div>
      <div class="right">
        <span class="short-phrase">
          ${forecastDets[2].Day.IconPhrase}
        </span>
        <span class="min-max-temp">
          ${Math.round(forecastDets[2].Temperature.Minimum.Value)}°${forecastDets[2].Temperature.Minimum.Unit} / ${Math.round(forecastDets[2].Temperature.Maximum.Value)}°${forecastDets[2].Temperature.Maximum.Unit}
        </span>
      </div>
    </div>
  `;

  const forecastInside3 = document.querySelector(".forecast-data-value-inside-3");

  forecastInside3.innerHTML = `
    <div class="daytime-container">
      <div class="daytime-title">
        Daytime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="hours-of-sun">Hours of Sun</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[2].Day.Wind.Speed.Value}${forecastDets[2].Day.Wind.Speed.Unit}</p>
            <p class="hours-of-sun-value">${forecastDets[2].HoursOfSun}hrs</p>
            <p class="cloud-cover-value">${forecastDets[2].Day.CloudCover}%</p>
          </div>
        </div>
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="sun-set">Sun Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[2].RealFeelTemperature.Maximum.Value)}°${forecastDets[2].RealFeelTemperature.Maximum.Unit}</p>
            <p class="sun-set-value">${sunSet[2].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[2].Day.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="nightime-container">
      <div class="daytime-title">
        Nightime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="moon-rise">Moon Rise</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[2].Night.Wind.Speed.Value}${forecastDets[2].Night.Wind.Speed.Unit}</p>
            <p class="moon-rise-value">${moonRise[2].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="cloud-cover-value">${forecastDets[2].Night.CloudCover}%</p>
          </div>
        </div>
    
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="moon-set">Moon Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[2].RealFeelTemperature.Minimum.Value)}°${forecastDets[2].RealFeelTemperature.Minimum.Unit}</p>
            <p class="moon-set-value">${moonSet[2].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[2].Night.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // forecast 4
  forecastElement4.innerHTML = `
    <div class="forecast-content-wrapper forecast-value-4">
      <div class="left">
        <span class="forecast-weather-icon-4">
          <img src="./images/${forecastDets[3].Day.Icon}.png" alt="">
        </span>
        <span class="title">
          ${forecastDate[3].toLocaleDateString('en-US', weekdayDate)}
        </span>
      </div>
      <div class="right">
        <span class="short-phrase">
          ${forecastDets[3].Day.IconPhrase}
        </span>
        <span class="min-max-temp">
          ${Math.round(forecastDets[3].Temperature.Minimum.Value)}°${forecastDets[3].Temperature.Minimum.Unit} / ${Math.round(forecastDets[3].Temperature.Maximum.Value)}°${forecastDets[3].Temperature.Maximum.Unit}
        </span>
      </div>
    </div>
  `;

  const forecastInside4 = document.querySelector(".forecast-data-value-inside-4");

  forecastInside4.innerHTML = `
    <div class="daytime-container">
      <div class="daytime-title">
        Daytime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="hours-of-sun">Hours of Sun</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[3].Day.Wind.Speed.Value}${forecastDets[3].Day.Wind.Speed.Unit}</p>
            <p class="hours-of-sun-value">${forecastDets[3].HoursOfSun}hrs</p>
            <p class="cloud-cover-value">${forecastDets[3].Day.CloudCover}%</p>
          </div>
        </div>
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="sun-set">Sun Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[3].RealFeelTemperature.Maximum.Value)}°${forecastDets[3].RealFeelTemperature.Maximum.Unit}</p>
            <p class="sun-set-value">${sunSet[3].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[3].Day.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="nightime-container">
      <div class="daytime-title">
        Nightime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="moon-rise">Moon Rise</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[3].Night.Wind.Speed.Value}${forecastDets[3].Night.Wind.Speed.Unit}</p>
            <p class="moon-rise-value">${moonRise[3].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="cloud-cover-value">${forecastDets[3].Night.CloudCover}%</p>
          </div>
        </div>
    
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="moon-set">Moon Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[3].RealFeelTemperature.Minimum.Value)}°${forecastDets[3].RealFeelTemperature.Minimum.Unit}</p>
            <p class="moon-set-value">${moonSet[3].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[3].Night.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // forecast 5
  forecastElement5.innerHTML = `
    <div class="forecast-content-wrapper forecast-value-5">
      <div class="left">
        <span class="forecast-weather-icon-5">
          <img src="./images/${forecastDets[4].Day.Icon}.png" alt="">
        </span>
        <span class="title">
          ${forecastDate[4].toLocaleDateString('en-US', weekdayDate)}
        </span>
      </div>
      <div class="right">
        <span class="short-phrase">
          ${forecastDets[4].Day.IconPhrase}
        </span>
        <span class="min-max-temp">
          ${Math.round(forecastDets[4].Temperature.Minimum.Value)}°${forecastDets[4].Temperature.Minimum.Unit} / ${Math.round(forecastDets[4].Temperature.Maximum.Value)}°${forecastDets[4].Temperature.Maximum.Unit}
        </span>
      </div>
    </div>
  `;

  const forecastInside5 = document.querySelector(".forecast-data-value-inside-5");

  forecastInside5.innerHTML = `
    <div class="daytime-container">
      <div class="daytime-title">
        Daytime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="hours-of-sun">Hours of Sun</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[4].Day.Wind.Speed.Value}${forecastDets[4].Day.Wind.Speed.Unit}</p>
            <p class="hours-of-sun-value">${forecastDets[4].HoursOfSun}hrs</p>
            <p class="cloud-cover-value">${forecastDets[4].Day.CloudCover}%</p>
          </div>
        </div>
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="sun-set">Sun Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[4].RealFeelTemperature.Maximum.Value)}°${forecastDets[4].RealFeelTemperature.Maximum.Unit}</p>
            <p class="sun-set-value">${sunSet[4].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[4].Day.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="nightime-container">
      <div class="daytime-title">
        Nightime
      </div>
      <div class="forecast-value-inside">
        <div class="left">
          <div class="title-wrapper">
            <p class="wind">Wind</p>
            <p class="moon-rise">Moon Rise</p>
            <p class="cloud-cover">Cloud Cover</p>
          </div>
          <div class="value-wrapper">
            <p class="wind-value">${forecastDets[4].Night.Wind.Speed.Value}${forecastDets[4].Night.Wind.Speed.Unit}</p>
            <p class="moon-rise-value">${moonRise[4].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="cloud-cover-value">${forecastDets[4].Night.CloudCover}%</p>
          </div>
        </div>
    
        <div class="right">
          <div class="title-wrapper">
            <p class="real-feel">Real Feel</p>
            <p class="moon-set">Moon Set</p>
            <p class="precipitation">Precipitation</p>
          </div>
          <div class="value-wrapper">
            <p class="real-feel-value">${Math.round(forecastDets[4].RealFeelTemperature.Minimum.Value)}°${forecastDets[4].RealFeelTemperature.Minimum.Unit}</p>
            <p class="moon-set-value">${moonSet[4].toLocaleTimeString('en-US', timeOption)}</p>
            <p class="precipitation-value">${forecastDets[4].Night.PrecipitationProbability}%</p>
          </div>
        </div>
      </div>
    </div>
  `;
  // udpdating daily forecast --end--

  console.log(forecastDets);
  console.log(weather);
  console.log(data);
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);
  const cityForecast = await getForecast(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    cityWeather: cityWeather,
    cityForecast: cityForecast,
  };
};

cityForm.addEventListener("submit", (e) => {
  //preventing default
  e.preventDefault();

  //getting city value
  const city = cityForm.city.value;
  cityForm.reset();

  //updating UI
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));

});