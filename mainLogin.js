

function signUp(){
    window.location.href="index.html";
}

let Btnlogin=document.getElementById('login');
Btnlogin.addEventListener('click',(event)=>{
    event.preventDefault();
    let UserName=document.getElementById('UserName');
    let password=document.getElementById('password');

    if(UserName.value === ''){
        alert('userName must enterd !');
        return;
    }

    if(password.value ===''){
        alert('pasword must enterd !');
        return;
    }

    let url="https://66e7e69db17821a9d9da6ed1.mockapi.io/SignUp";

    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let user=data.find(item=> item.username=== UserName.value && item.password === password.value);
    if(user){
        localStorage.setItem('user',JSON.stringify({
            name: UserName.value,
          }),)

        window.location.href="Home.html";
    }else{
        alert('login not valid!');
        return;
    }
    
  });
})
