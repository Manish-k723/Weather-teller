const button = document.getElementById("search-button")
const input = document.getElementById("input-city-name")
const locationData = document.getElementById("location-data")
const cityTime = document.getElementById("city-time")
const temp = document.getElementById("city-temp")

async function getWeatherData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d8165ab1279f48ba95b93135240109&q=${cityName}&aqi=yes`);

    return await promise.json()
}

button.addEventListener("click", async ()=>{
    const cityName = input.value;
    const result = await getWeatherData(cityName);
    locationData.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = result.location.localtime
    temp.innerText= `${result.current.temp_c}° C`
})