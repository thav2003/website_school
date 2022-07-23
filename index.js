import {
    btnSignIn,
    inputName,
    inputPass,
    domain,
} from '/help.js';
import {matchCredentials} from '/validate.js';
document.addEventListener('DOMContentLoaded', function() {
    button()
    console.log()
    

    //var getInput = prompt("Hey type something here: ");
    //localStorage.setItem("storageName",getInput);
},false)

const button=()=>{
    const path='/routes/main.html'
    
    btnSignIn.onclick = ()=>{
        const email=inputName.value
        const pass=inputPass.value
        const check=matchCredentials(email,pass)
        if(check.flag){
            localStorage.setItem("email",email);
            localStorage.setItem("pass",pass);
            localStorage.setItem("name",check.name)
            window.location.href = domain+path;
        }else if(!name){
            console.log("name rỗng")
        }else if(!pass){
            console.log("pass rỗng")
        }else{
            console.log("Sai tên đăng nhập hoặc mật khẩu")
        }
    }
}