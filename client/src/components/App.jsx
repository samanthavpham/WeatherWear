import React from 'react';
const axios = require('axios');
const config = require('../../../config');
import OutfitList from './OutfitList.jsx';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
        <Typography gutterBottom variant="h1" component="div" id='title'>
          WeatherWear
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">
            CITY
            <input type='text' name='city' value={this.state.city} onChange={this.handleChange} />
          </label>
          <label className="form-label">
            STATE CODE
            <input type='text' name='stateCode' value={this.state.stateCode} onChange={this.handleChange} placeholder="only applicable if 'Country Code' is US" />
          </label>
          <label className="form-label">
            COUNTRY CODE
            <input type='text' name='countryCode' value={this.state.countryCode} onChange={this.handleChange} />
          </label>
          <Button variant="outlined" type='submit'>SUBMIT</Button>
        </form>
        <Typography gutterBottom variant="h4" component="div" id="location">
        {`${this.state.location}`}
        </Typography>
        {
        (this.state.temp !== 0)
        ? <Typography gutterBottom variant="h3" component="div" id="temp">
            {`${Math.round(this.state.temp)} \u00B0 F / ${Math.round((this.state.temp - 32) * (5 / 9))} \u00B0 C`}
          </Typography>
        : <div></div>
        }
        <Typography gutterBottom variant="h5" component="div" id="weather">
        {`${this.state.weather}`}
        </Typography>
        {
        (Object.keys(this.state.outfit).length > 0)
        ? <OutfitList outfit={this.state.outfit} className="outfit-list"/>
        : <div></div>
        }
      </div>
    );
  }
}

export default App;