const key = "uezARWeOLVOVtXytvEr3UAIeMQefXnEG";

// getting weather
const getWeather = async (id) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}&details=true`;
  
    const res = await fetch(baseUrl + query);
    const data = await res.json();
  
    return data;
};

// getting forecast
const getForecast = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const query = `${id}?apikey=${key}&details=true&metric=true`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data;
};
 
// getting city
const getCity = async (city) => {
    const baseUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
  
    const res = await fetch(baseUrl + query);
    const data = await res.json();
  
    return data[0];
};