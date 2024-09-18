function logout(){
    localStorage.removeItem('user');
    window.location.href='login.html';
}

function pray(){
    window.location.href='pray.html';
}
function wather(){
    window.location.href='weather.html';
}

let Myname=document.getElementById('Myname');

let url="https://66e7e69db17821a9d9da6ed1.mockapi.io/SignUp";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if(data.length>0){
        let user=JSON.parse(localStorage.getItem('user'));
        console.log(user);
        Myname.textContent=user.name;
        
    }
  });