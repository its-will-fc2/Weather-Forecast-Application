let weather = {
    "apiKey": "d36e62fdb4e431963cacef9f87f479e5",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        var { name } = data.city;
        var { icon, description } = data.list[0].weather[0];
        var { temp, humidity } = data.list[0].main;
        var { speed } = data.list[0].wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speed) + "km/h";
        document.querySelector(".today").classList.remove("weather-loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1950x937/?" + name + "')";
        var { temp } = data.list[8].main;
        var { icon } = data.list[8].weather[0];
        var { dt_txt } = data.list[8];
        console.log(dt_txt)
        document.querySelector(".secondDayIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".secondDayTemp").innerText = Math.round(temp) + "°C";
        document.querySelector(".secondDayDate").innerText = dt_txt.slice(5, 7) + "/" + dt_txt.slice(8, 10);
        var { temp } = data.list[16].main;
        var { icon } = data.list[16].weather[0];
        var { dt_txt } = data.list[16];
        document.querySelector(".thirdDayIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".thirdDayTemp").innerText = Math.round(temp) + "°C";
        document.querySelector(".thirdDayDate").innerText = dt_txt.slice(5, 7) + "/" + dt_txt.slice(8, 10);
        var { temp } = data.list[24].main;
        var { icon } = data.list[24].weather[0];
        var { dt_txt } = data.list[24];
        document.querySelector(".fourthDayIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".fourthDayTemp").innerText = Math.round(temp) + "°C";
        document.querySelector(".fourthDayDate").innerText = dt_txt.slice(5, 7) + "/" + dt_txt.slice(8, 10);
        var { temp } = data.list[32].main;
        var { icon } = data.list[32].weather[0];
        var { dt_txt } = data.list[32];
        document.querySelector(".fifthDayIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".fifthDayTemp").innerText = Math.round(temp) + "°C";
        document.querySelector(".fifthDayDate").innerText = dt_txt.slice(5, 7) + "/" + dt_txt.slice(8, 10);
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Los Angeles")