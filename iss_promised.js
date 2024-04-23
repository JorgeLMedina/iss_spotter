const request = require('request-promise-native');

const fetchMyIP = function () {
  return request(`https://api.ipify.org/?format=json`);
};

const fetchCoordsByIP = function (body) {
  const IP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${IP}`);
};

const fetchISSFlyOverTimes = function (coords) {
  const coordsObj = JSON.parse(coords)
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}`);
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };