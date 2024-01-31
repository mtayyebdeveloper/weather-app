let weatherapi =async (city)=>{
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a8a828df03msh863899cf1ba614ap137aafjsn90a5d1a8c059',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    let response =await fetch(url,options);
    let weather =await response.json();
    console.log(weather);
    city_temp.innerHTML =weather.temp;
    let temprature =temp.innerHTML =weather.temp;
    if(temprature<=7){
        weathercheck.innerHTML ="Cool"
    }else if(temprature >7 && temprature<=17){
        weathercheck.innerHTML ="Normal"
    }else if(temprature >17){
        weathercheck.innerHTML ="Hot"
    }else{
        weathercheck.innerHTML ="undefined"
    }
    min_temp.innerHTML =weather.min_temp;
    max_temp.innerHTML =weather.max_temp;
    humidity.innerHTML =weather.humidity;
    humidity1.innerHTML =weather.humidity;
    sunrise.innerHTML =weather.sunrise;
    sunset.innerHTML =weather.sunset;
    wind.innerHTML =weather.wind_speed;
    wind_d.innerHTML =weather.wind_degrees;
    wind_s.innerHTML =weather.wind_speed;
    feelsLike.innerHTML =weather.feels_like;
};
let btnsearch =document.getElementById('search_btn');
btnsearch.addEventListener("click",(e)=>{
    e.preventDefault();
    let searchb =search_box;
    let cityname =document.querySelectorAll(".cityname");
    cityname.forEach((elements)=>{
        elements.innerHTML=searchb.value;
    })
    weatherapi(searchb.value);
});

