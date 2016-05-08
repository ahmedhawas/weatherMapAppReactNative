import _ from 'lodash';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=';

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    return {
      city: json.name,
      temperature: KelvinToCelius(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }
  });
}

KelvinToCelius = (kelvin) => {
  return kelvin - 273.15 + ' ˚C';
}
