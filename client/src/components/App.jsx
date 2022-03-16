import React from 'react';
const axios = require('axios');
const config = require('../../../config');
import OutfitList from './OutfitList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      stateCode: '',
      countryCode: '',
      location: '',
      weather: '',
      temp: 0,
      outfit: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.stateCode === '') {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.countryCode}&appid=${config.app.openWeatherApiKey}&units=imperial`)
        .then((response) => {
          this.setState({
            city: '',
            stateCode: '',
            countryCode: '',
            location: response.data.name,
            weather: response.data.weather[0].description,
            temp: response.data.main.temp
          }, () => {
            axios.get(`/api/${Math.round(this.state.temp / 10) * 10}`)
              .then((response) => {
                this.setState({
                  outfit: response.data
                })
              })
              .catch((error) => {
                console.error(error);
              });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.stateCode},${this.state.countryCode}&appid=${config.app.openWeatherApiKey}&units=imperial`)
        .then((response) => {
          this.setState({
            city: '',
            stateCode: '',
            countryCode: '',
            location: response.data.name,
            weather: response.data.weather[0].description,
            temp: response.data.main.temp
          }, () => {
            axios.get(`/api/${Math.round(this.state.temp / 10) * 10}`)
              .then((response) => {
                this.setState({
                  outfit: response.data
                })
              })
              .catch((error) => {
                console.error(error);
              });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>WeatherWear</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            <input type='text' name='city' value={this.state.city} onChange={this.handleChange} />
          </label>
          <label>
            State Code:
            <input type='text' name='stateCode' value={this.state.stateCode} onChange={this.handleChange} />
          </label>
          <label>
            Country Code:
            <input type='text' name='countryCode' value={this.state.countryCode} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <h3>{`Temperature in ${this.state.location} is ${Math.round(this.state.temp)} degrees F and ${Math.round((this.state.temp - 32) * (5 / 9))} degrees C, ${this.state.weather}`}</h3>
        {
        (Object.keys(this.state.outfit).length > 0)
        ? <OutfitList outfit={this.state.outfit} />
        : <div></div>
        }
      </div>
    );
  }
}

export default App;