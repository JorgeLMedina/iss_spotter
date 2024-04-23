const { fetchISSFlyOverTimes } = require("./iss");

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
}); */

/* fetchCoordsByIP('173.181.72.254', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned coordinates:", coordinates);
}); */

fetchISSFlyOverTimes({ latitude: 49.2827291, longitude: -123.1207375 }, (error, times) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned times:", times);
});
