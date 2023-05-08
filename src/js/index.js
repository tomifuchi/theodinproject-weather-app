/* 
  Read this before continuing coding this exercise:
  https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

  Reading realtime weather API
  https://www.weatherapi.com/docs/ Read real time API use current.json as path

  Planned display infomations:
  **location object
  location.country
  location.localtime
  location.name
  location.region

  **current object
  current.condition.text
  current.feelslike_c
  current.temp_c
  current.wind_kph
  current.humidity
  current.cloud
  current.uv

  UV index
  https://en.wikipedia.org/wiki/Ultraviolet_index
*/

//Functions make url
const makeUrl = (base, path, params) => base + '/' + path + '?' + params

const appendPath = (target, path) =>  target + '/' + path; //addPath
const appendParams = (target, params) =>  target + '&' + params; //addParams

function getWeather(location) {
  //Arguments to pass
  const baseUrl = 'http://api.weatherapi.com/v1';
  const path = 'current.json'
  const apiKey = 'key=fdcc760077f34555b2a135105230705';
  const query = `q=${location}`;

  return fetch(makeUrl(baseUrl, path, appendParams(query, apiKey)), {mode: 'cors'})
    .then(function(response) {
      if(response.ok) {
        return response.json();
      } else {
          if(response.status == 400)
            throw Error('No location found');
          else
            throw Error(`Error, response with this status ${response.status}`);
      }
    })
    .then(function(response) {
      return {
          name: response.location.name,
          region: response.location.region,
          country: response.location.country,
          localtime: response.location.localtime,
          temp_c: response.current.temp_c,
          feelslike_c: response.current.feelslike_c,
          condition: response.current.condition.text,
          wind_kph: response.current.wind_kph,
          humidity: response.current.humidity,
          cloud: response.current.cloud,
          uv: response.current.uv,
        }
    })
}
getWeather('saigon').then(render);

//cached DOM nodes for ease of access
const cachedNodes = {
  resultContainer: document.getElementById('result-container'),
  searchBar: document.getElementById('search-bar'),
  searchbutton: document.getElementById('search-button')
}

//Dom helper
const q = (target) => (elm) => target.querySelector(elm)
const tc = (node, txt) => node.textContent = txt

function render(data) {
  const g = q(cachedNodes.resultContainer);
  renderClear();

  //Loop location
  for(prop in data) {
    tc(g('#' + prop), prop + ': ' + data[prop]);
  }
}

function renderClear() {
  [...cachedNodes.resultContainer.childNodes].forEach((child) => {
    tc(child, '');
  });
}

//Search button
cachedNodes.searchbutton.addEventListener('click' , () => {
  if(cachedNodes.searchBar.value != '') {
    const search = cachedNodes.searchBar.value;
    cachedNodes.searchBar.value = '';
    getWeather(search).then(render).catch((err) => {renderClear(); console.error(err);});
  }
})