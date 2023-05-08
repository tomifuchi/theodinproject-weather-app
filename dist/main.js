/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var makeUrl = function makeUrl(base, path, params) {
  return base + '/' + path + '?' + params;
};
var appendPath = function appendPath(target, path) {
  return target + '/' + path;
}; //addPath
var appendParams = function appendParams(target, params) {
  return target + '&' + params;
}; //addParams

function getWeather(location) {
  //Arguments to pass
  var baseUrl = 'http://api.weatherapi.com/v1';
  var path = 'current.json';
  var apiKey = 'key=fdcc760077f34555b2a135105230705';
  var query = "q=".concat(location);
  return fetch(makeUrl(baseUrl, path, appendParams(query, apiKey)), {
    mode: 'cors'
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      if (response.status == 400) throw Error('No location found');else throw Error("Error, response with this status ".concat(response.status));
    }
  }).then(function (response) {
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
      uv: response.current.uv
    };
  });
}
getWeather('saigon').then(render);

//cached DOM nodes for ease of access
var cachedNodes = {
  resultContainer: document.getElementById('result-container'),
  searchBar: document.getElementById('search-bar'),
  searchbutton: document.getElementById('search-button')
};

//Dom helper
var q = function q(target) {
  return function (elm) {
    return target.querySelector(elm);
  };
};
var tc = function tc(node, txt) {
  return node.textContent = txt;
};
function render(data) {
  var g = q(cachedNodes.resultContainer);
  renderClear();

  //Loop location
  for (prop in data) {
    tc(g('#' + prop), prop + ': ' + data[prop]);
  }
}
function renderClear() {
  _toConsumableArray(cachedNodes.resultContainer.childNodes).forEach(function (child) {
    tc(child, '');
  });
}

//Search button
cachedNodes.searchbutton.addEventListener('click', function () {
  if (cachedNodes.searchBar.value != '') {
    var search = cachedNodes.searchBar.value;
    cachedNodes.searchBar.value = '';
    getWeather(search).then(render)["catch"](function (err) {
      renderClear();
      console.error(err);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDLElBQU1DLE1BQU0sR0FBR3ZCLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDa0IsS0FBSztJQUMxQ3RCLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDa0IsS0FBSyxHQUFHLEVBQUU7SUFDaENsRCxVQUFVLENBQUNtRCxNQUFNLENBQUMsQ0FBQzNDLElBQUksQ0FBQ21CLE1BQU0sQ0FBQyxTQUFNLENBQUMsVUFBQ3lCLEdBQUcsRUFBSztNQUFDVCxXQUFXLENBQUMsQ0FBQztNQUFFVSxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0lBQUMsQ0FBQyxDQUFDO0VBQ3RGO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgUmVhZCB0aGlzIGJlZm9yZSBjb250aW51aW5nIGNvZGluZyB0aGlzIGV4ZXJjaXNlOlxuICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0NvbW1vbl9xdWVzdGlvbnMvV2ViX21lY2hhbmljcy9XaGF0X2lzX2FfVVJMXG5cbiAgUmVhZGluZyByZWFsdGltZSB3ZWF0aGVyIEFQSVxuICBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9kb2NzLyBSZWFkIHJlYWwgdGltZSBBUEkgdXNlIGN1cnJlbnQuanNvbiBhcyBwYXRoXG5cbiAgUGxhbm5lZCBkaXNwbGF5IGluZm9tYXRpb25zOlxuICAqKmxvY2F0aW9uIG9iamVjdFxuICBsb2NhdGlvbi5jb3VudHJ5XG4gIGxvY2F0aW9uLmxvY2FsdGltZVxuICBsb2NhdGlvbi5uYW1lXG4gIGxvY2F0aW9uLnJlZ2lvblxuXG4gICoqY3VycmVudCBvYmplY3RcbiAgY3VycmVudC5jb25kaXRpb24udGV4dFxuICBjdXJyZW50LmZlZWxzbGlrZV9jXG4gIGN1cnJlbnQudGVtcF9jXG4gIGN1cnJlbnQud2luZF9rcGhcbiAgY3VycmVudC5odW1pZGl0eVxuICBjdXJyZW50LmNsb3VkXG4gIGN1cnJlbnQudXZcblxuICBVViBpbmRleFxuICBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbHRyYXZpb2xldF9pbmRleFxuKi9cblxuLy9GdW5jdGlvbnMgbWFrZSB1cmxcbmNvbnN0IG1ha2VVcmwgPSAoYmFzZSwgcGF0aCwgcGFyYW1zKSA9PiBiYXNlICsgJy8nICsgcGF0aCArICc/JyArIHBhcmFtc1xuXG5jb25zdCBhcHBlbmRQYXRoID0gKHRhcmdldCwgcGF0aCkgPT4gIHRhcmdldCArICcvJyArIHBhdGg7IC8vYWRkUGF0aFxuY29uc3QgYXBwZW5kUGFyYW1zID0gKHRhcmdldCwgcGFyYW1zKSA9PiAgdGFyZ2V0ICsgJyYnICsgcGFyYW1zOyAvL2FkZFBhcmFtc1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIC8vQXJndW1lbnRzIHRvIHBhc3NcbiAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcbiAgY29uc3QgcGF0aCA9ICdjdXJyZW50Lmpzb24nXG4gIGNvbnN0IGFwaUtleSA9ICdrZXk9ZmRjYzc2MDA3N2YzNDU1NWIyYTEzNTEwNTIzMDcwNSc7XG4gIGNvbnN0IHF1ZXJ5ID0gYHE9JHtsb2NhdGlvbn1gO1xuXG4gIHJldHVybiBmZXRjaChtYWtlVXJsKGJhc2VVcmwsIHBhdGgsIGFwcGVuZFBhcmFtcyhxdWVyeSwgYXBpS2V5KSksIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gNDAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIGxvY2F0aW9uIGZvdW5kJyk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEVycm9yLCByZXNwb25zZSB3aXRoIHRoaXMgc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICByZWdpb246IHJlc3BvbnNlLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgICAgICBjb3VudHJ5OiByZXNwb25zZS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgICAgIGxvY2FsdGltZTogcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICAgIHRlbXBfYzogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgICAgICAgZmVlbHNsaWtlX2M6IHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgY29uZGl0aW9uOiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgIHdpbmRfa3BoOiByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgICAgIGh1bWlkaXR5OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgIGNsb3VkOiByZXNwb25zZS5jdXJyZW50LmNsb3VkLFxuICAgICAgICAgIHV2OiByZXNwb25zZS5jdXJyZW50LnV2LFxuICAgICAgICB9XG4gICAgfSlcbn1cbmdldFdlYXRoZXIoJ3NhaWdvbicpLnRoZW4ocmVuZGVyKTtcblxuLy9jYWNoZWQgRE9NIG5vZGVzIGZvciBlYXNlIG9mIGFjY2Vzc1xuY29uc3QgY2FjaGVkTm9kZXMgPSB7XG4gIHJlc3VsdENvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdC1jb250YWluZXInKSxcbiAgc2VhcmNoQmFyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhcicpLFxuICBzZWFyY2hidXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJylcbn1cblxuLy9Eb20gaGVscGVyXG5jb25zdCBxID0gKHRhcmdldCkgPT4gKGVsbSkgPT4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoZWxtKVxuY29uc3QgdGMgPSAobm9kZSwgdHh0KSA9PiBub2RlLnRleHRDb250ZW50ID0gdHh0XG5cbmZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gIGNvbnN0IGcgPSBxKGNhY2hlZE5vZGVzLnJlc3VsdENvbnRhaW5lcik7XG4gIHJlbmRlckNsZWFyKCk7XG5cbiAgLy9Mb29wIGxvY2F0aW9uXG4gIGZvcihwcm9wIGluIGRhdGEpIHtcbiAgICB0YyhnKCcjJyArIHByb3ApLCBwcm9wICsgJzogJyArIGRhdGFbcHJvcF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNsZWFyKCkge1xuICBbLi4uY2FjaGVkTm9kZXMucmVzdWx0Q29udGFpbmVyLmNoaWxkTm9kZXNdLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgdGMoY2hpbGQsICcnKTtcbiAgfSk7XG59XG5cbi8vU2VhcmNoIGJ1dHRvblxuY2FjaGVkTm9kZXMuc2VhcmNoYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcbiAgaWYoY2FjaGVkTm9kZXMuc2VhcmNoQmFyLnZhbHVlICE9ICcnKSB7XG4gICAgY29uc3Qgc2VhcmNoID0gY2FjaGVkTm9kZXMuc2VhcmNoQmFyLnZhbHVlO1xuICAgIGNhY2hlZE5vZGVzLnNlYXJjaEJhci52YWx1ZSA9ICcnO1xuICAgIGdldFdlYXRoZXIoc2VhcmNoKS50aGVuKHJlbmRlcikuY2F0Y2goKGVycikgPT4ge3JlbmRlckNsZWFyKCk7IGNvbnNvbGUuZXJyb3IoZXJyKTt9KTtcbiAgfVxufSkiXSwibmFtZXMiOlsibWFrZVVybCIsImJhc2UiLCJwYXRoIiwicGFyYW1zIiwiYXBwZW5kUGF0aCIsInRhcmdldCIsImFwcGVuZFBhcmFtcyIsImdldFdlYXRoZXIiLCJsb2NhdGlvbiIsImJhc2VVcmwiLCJhcGlLZXkiLCJxdWVyeSIsImNvbmNhdCIsImZldGNoIiwibW9kZSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJsb2NhbHRpbWUiLCJ0ZW1wX2MiLCJjdXJyZW50IiwiZmVlbHNsaWtlX2MiLCJjb25kaXRpb24iLCJ0ZXh0Iiwid2luZF9rcGgiLCJodW1pZGl0eSIsImNsb3VkIiwidXYiLCJyZW5kZXIiLCJjYWNoZWROb2RlcyIsInJlc3VsdENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCYXIiLCJzZWFyY2hidXR0b24iLCJxIiwiZWxtIiwicXVlcnlTZWxlY3RvciIsInRjIiwibm9kZSIsInR4dCIsInRleHRDb250ZW50IiwiZGF0YSIsImciLCJyZW5kZXJDbGVhciIsInByb3AiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwic2VhcmNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==