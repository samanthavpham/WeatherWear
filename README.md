# WeatherWear #

## Summary ##
  WeatherWear takes the guesswork out of deciding what to wear based on your chosen city's current temperature. Just input your chosen city, state code (only applicable if country code is US), and country code to get the current temperature, weather conditions and attire suggestions.

## How the Web App Works ##
  Using the input, a call will be made to the OpenWeather API, which will return the temperature. Based on the rounded temperature, a query will be made to a postgresql database which will return attire suggestions for the rounded temperature. Note: the temperatures in the database will increment 10 degrees F.

## How to Get Started ##
* Obtain OpenWeather API key from https://openweathermap.org/api
* Create .config file with the following info:
    const config = {
      server: {
        port: [insert port here]
      },
      app: {
        openWeatherApiKey: [insert OpenWeather API key here]
      }
    };
    module.exports = config;
* npm start server
* npm run build
* navigate to localhost:[insert port here] and enter in chosen city, state code (only applicable if country code is US), and country code.
