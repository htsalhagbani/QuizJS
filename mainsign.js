console.log("hi");

function login(){
    window.location.href='Login.html';
}

let signup=document.getElementById('signup');

signup.addEventListener('click',(event)=>{
    event.preventDefault();
    let name=document.getElementById('name');
    let Username=document.getElementById('UserName');
    let email=document.getElementById('email');
    let password=document.getElementById('password');

   
    let emailReqix=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    if(name.value === ''){
        alert('must fill name faild !');
        return;
    } 
    
     if((name.value).length <= 3){
        alert('name must larger than 3 charater!');
        return;
    }
    
    if( Username.value===''){
        alert('must fill Username faild ');
        return;
    }    
    if(! /[A-Z]/.test(Username.value)){
        alert('username must contian one char Capital!');
        return;
    } 
    if( email.value===''){
        alert(' must fill email faild!');
        return;
    } if(!emailReqix.test(email.value)){
        alert('email must valid!');
        return;
    } if( password.value ===''){
        alert(' must fill password faild!');
        return;
    } 
    if((password.value).length <= 4){
        alert('password must more than 4 character!');
        return;
    }
        let url="https://66e7e69db17821a9d9da6ed1.mockapi.io/SignUp";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let exist=data.find(item=> item.username===Username.value && item.email === email.value);
        console.log(exist);


        if(exist){
            alert('User is Registerd before !');
            return;
        
        } else{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                  name: name.value,
                  username: Username.value,
                  email: email.value,
                  password: password.value,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
    
    
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                window.location.href="Login.html";
              });
        }
    });

      


})