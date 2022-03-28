# WeatherWear

## Summary
  Hello World! (๑•́ ᵕ •̀๑)◞ WeatherWear takes the guesswork out of deciding what to wear based on your chosen city's current temperature. Just input your chosen city, state code (only applicable if country code is US), and country code to get the current temperature, weather conditions and attire suggestions.
  

## Built With
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## How the Web App Works
  Using the input, a call will be made to the OpenWeather API, which will return the temperature. Based on the rounded temperature, a query will be made to a postgresql database which will return attire suggestions for the rounded temperature. Note: the temperatures in the database will increment 10 degrees fahrenheit.

## How to Get Started
* Obtain OpenWeather API key from https://openweathermap.org/api
* Create .config file with the following info:
```
const config = {
  server: {
    port: [insert port]
  },
  app: {
    openWeatherApiKey: [insert api key]
  }
};

module.exports = config;
```
* Create postgresql database with schema and data.json from repository
* In two different terminals run:
```bash
npm start server
```
```bash
npm run build
```
* Navigate to
```
localhost:[insert port here]
```
* Enter in chosen city, state code (only applicable if country code is US), and country code.

YAY! ✧(ﾉ◕ヮ◕)ﾉ *:・ﾟ 

If everything went as expected, you should have the application running on your local machine as follows:
![Screenshot](http://g.recordit.co/7FYyDCxeDQ.gif)

## Contributors
* [Samantha Pham](https://github.com/samanthavpham)
