# WeatherWear #

## Summary ##
  WeatherWear takes the guesswork out of deciding what to wear based on your chosen city's current temperature. Just input your chosen city, state code (only applicable if country code is US), and country code to get the current temperature, weather conditions and attire suggestions.

## How the Web App Works ##
  Using the input, a call will be made to the OpenWeather API, which will return the temperature. Based on the rounded temperature, a query will be made to a postgresql database which will return attire suggestions for the rounded temperature. Note: the temperatures in the database will increment 10 degrees F.

## How to Get Started ##
* Obtain OpenWeather API key from https://openweathermap.org/api
* Create .config file with the following info:
![Screenshot](client/dist/assets/config_instructions.png?raw=true)
* Create postgresql database with schema and data.json from repository
* In terminal: npm start server
* In terminal: npm run build
* Navigate to localhost:[insert port here] and enter in chosen city, state code (only applicable if country code is US), and country code.
