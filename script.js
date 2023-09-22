const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

function fetchData(city){
    city_name.innerHTML = city
    // var c = document.getElementsByClassName("form-control me-2")
    // console.log(c.value)
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    try {
        fetch(url, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                wind_speed.innerHTML=response.wind_speed
                wind_degrees.innerHTML=response.wind_degrees
                temp.innerHTML=response.temp
                humidity.innerHTML=response.humidity
                sunset.innerHTML=response.sunset
                min_temp.innerHTML=response.min_temp
                cloud_pct.innerHTML=response.cloud_pct
                feels_like.innerHTML=response.feels_like
                sunrise.innerHTML=response.sunrise
                max_temp.innerHTML=response.max_temp
                console.log(temp)

            })

    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchData(city.value);
})

fetchData("New Delhi");

