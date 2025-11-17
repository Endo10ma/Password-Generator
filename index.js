const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.querySelector("#pass1")
let pwd2 = document.querySelector("#pass2")

let pwdBoxes = [pwd1, pwd2]

let pwLength = document.querySelector("#passwordLength")

console.log(pwLength)

function randomIndexer(){
    return Math.floor(Math.random() * characters.length)
}


function passwordGenerator(){
    let pwdlength

    if (pwLength.value.length === 0){
        pwdlength = 15
    }
    else{
        pwdlength = parseInt(pwLength.value)
    }

    for (i = 0; i < pwdBoxes.length; i++){
        console.log("test")
        let genPass = ""
        for (let i = 0; i < pwdlength; i++){
            genPass += characters[randomIndexer()]
        }
        pwdBoxes[i].textContent = genPass
        

    }
}

// 

