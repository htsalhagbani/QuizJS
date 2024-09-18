function logout(){
    localStorage.removeItem('user');
    window.location.href='login.html';
}

let url="https://api.aladhan.com/v1/timingsByAddress/09-03-2015?address=Riyadh";
let datehijri=document.getElementById('datehijri');
let dategogorian =document.getElementById('dategogorian');
let day=document.getElementById('day');
let asr=document.getElementById('asr');
let Dhuhr=document.getElementById('Dhuhr');
let Fajr=document.getElementById('Fajr');
let Isha=document.getElementById('Isha');
let Maghrib=document.getElementById('Maghrib');
let Firstthird=document.getElementById('Firstthird');
let Imsak=document.getElementById('Imsak');
let Lastthird=document.getElementById('Lastthird');
let Midnight=document.getElementById('Midnight');
let Sunrise =document.getElementById('Sunrise');
let Sunset=document.getElementById('Sunset');
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data.timings);
    datehijri.textContent=json.data.date.hijri.date;
    dategogorian.textContent=json.data.date.readable;
    day.textContent=json.data.date.gregorian.weekday.en;
    asr.textContent=json.data.timings.Asr;
    Dhuhr.textContent=json.data.timings.Dhuhr;
    Fajr.textContent=json.data.timings.Fajr;
    Isha.textContent=json.data.timings.Isha;
    Maghrib.textContent=json.data.timings.Maghrib;
    Firstthird.textContent=json.data.timings.Firstthird;
    Imsak.textContent=json.data.timings.Imsak;
    Lastthird.textContent=json.data.timings.Lastthird;
    Midnight.textContent=json.data.timings.Midnight;
    Sunrise.textContent=json.data.timings.Sunrise;
    Sunset.textContent=json.data.timings.Sunset;
  }
);