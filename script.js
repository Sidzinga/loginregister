
document.getElementById("register").addEventListener("click",lclstrge)

function lclstrge(){


    let registry =  
 [ 
    
        localStorage.setItem("name", document.getElementById("name").value),
   localStorage.setItem("surname",document.getElementById("surname").value),
      localStorage.setItem("verify" , document.getElementById("verify").value),
     localStorage.setItem("password" , document.getElementById("password").value),
 localStorage.setItem("email", document.getElementById("email").value),

 ]  
console.log(registry)

if(registry.hasOwnProperty(document.getElementById("email").value) == true){
    return alert("Email has been registered" +  + " " + " Please Login or Register with new email")
}
}

// function register(){
     
 
// for(let i = 0;;){

// }
// let name = document.getElementById("name").value
// let surname = document.getElementById("surname").value
// let verify = document.getElementById("verify").value
// let password = document.getElementById("password").value
// let email = document.getElementById("email").value


// let newrg = {
//      name: name,
//      surname: surname,
//      verify: verify,
//      password: password,
//      email: email,
// }


// let registry = []

// if(registry.hasOwnProperty(email) == true){
//     return alert("Email has been registered" +  + " " + " Please Login or Register with new email")
// }
// else {
// registry.push(newrg)

// }




// $("rgst").submit(function (event) {
//     let obj_form = $(this).serializeArray();
//     obj_form.forEach(function (input) {
//         registry.push(input);
//     })
//     event.preventDefault();
// });

// console.log(registry)

// }

document.getElementById("login").addEventListener("click",login)
function login() {

    // let eml = document.getElementById("email")
    // let psswrd = document.getElementById("password")
    for(let i = 0; i < registry.length; i++){
    
        if(registry[i].hasOwnProperty(email) == eml.value && registry[i].hasOwnProperty(password) == psswrd.value ){
            return document.getElementById("dsply").innerHTML = registry[i]
        }
        else{
            return document.getElementById("dsply").innerHTML = "Incorrect Email Or Password"
        }
    
    }

    let display = [

        localStorage.setItem("name", document.getElementById("name").value),
        localStorage.setItem("surname",document.getElementById("surname").value),
           localStorage.setItem("verify" , document.getElementById("verify").value),
          localStorage.setItem("password" , document.getElementById("password").value),
      localStorage.setItem("email", document.getElementById("email").value),
     
        
    ]
        
    
    return document.getElementById("dsply").innerHTML = display
    }