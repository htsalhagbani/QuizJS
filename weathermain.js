let url="https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=9a8942914dde63c45fefc03c8558f8b6";
let city =document.getElementById('city');
let temp=document.getElementById('temp');
let humidity=document.getElementById('humidity')
let long=document.getElementById('long');
let width=document.getElementById('width');
fetch(url)
  .then((response) => response.json())
  .then((data) =>{
    console.log(data);
city.textContent=data.name;
temp.textContent=data.main.temp;
humidity.textContent=data.main.humidity;
long.textContent=data.coord.lon;
width.textContent=data.coord.lat;
  });