//const searchName = document.getElementById('searchName').value;
const button = document.getElementById('submit');

button.addEventListener('click', function () {
    const searchName = document.getElementById('searchName').value;
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${searchName}+&appid=a467103ff9f543f8ee523d3d59991fc2`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temparature').innerText = Math.round(data.main.temp - 273.15);
        document.getElementById('weather').innerText = data.weather[0].main;
       document.getElementById('icon').src =  "https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
    })
    .catch(error=> alert("This name does't exit...Try again"));
    document.getElementById('searchName').value = "";
})
