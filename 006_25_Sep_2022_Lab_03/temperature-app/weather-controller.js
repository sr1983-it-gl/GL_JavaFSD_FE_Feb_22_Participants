import {WeatherAPI} from "./weather-api.js"
import {Utils, DEGREES_CELCIUS_SYMBOL} from  "./utils.js";

class WeatherController{

  init(){

    this.addEventHandlers();
  }

  addEventHandlers(){

    const searchBoxElement = document.querySelector(".search-box");
    searchBoxElement.param1 = this;

    searchBoxElement.addEventListener("keypress", this.handleSearch);
  }

  handleSearch(event){

    // console.log("Event fired" + event.key);

    if (event.key == "Enter" || event.keyCode == 13){

      // const searchBoxElement = document.querySelector(".search-box");
      // searchBoxElement.value;

      const eventTarget = event.target;

      const userData = eventTarget.value;

      const weatherAPI = new WeatherAPI();
 
      let weatherControllerObj = eventTarget.param1;

      weatherAPI.invoke(userData)
        .then( (responseJSON) => {
    
          console.log(responseJSON);

          weatherControllerObj.updateUI(responseJSON);
        })
    }
  }

  updateUI(responseJSON){

    let cityElement = document.querySelector(".location .city");
    cityElement.innerText = 
      `${responseJSON.name}, ${responseJSON.sys.country}`;

    let dateElement = document.querySelector(".location .date");
    dateElement.innerText = Utils.formatDate();

    let temperatureElement = document.querySelector(".current .temp");
    temperatureElement.innerHTML = 
      `${responseJSON.main.temp} ${DEGREES_CELCIUS_SYMBOL}`;

    let weatherElement = document.querySelector(".current .weather");
    weatherElement.innerText = 
      `${responseJSON.weather[0].main} `;

    let lowHighElement = document.querySelector(".current .hi-low");
    lowHighElement.innerHTML  = 
      `${responseJSON.main.temp_min} ${DEGREES_CELCIUS_SYMBOL} / ${responseJSON.main.temp_max} ${DEGREES_CELCIUS_SYMBOL}`;        
  }

}

export {WeatherController}