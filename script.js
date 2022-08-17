document.getElementById('B1').onclick = function () { Validation() }

function Validation() {
    //************* for Email Validation *****************************
    let inputMail = xEmail.value;
    let validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputMail.match(validMail)) {
        document.getElementById('em_check').style.display = "none";
        document.getElementsByClassName('svg1')[0].style.display = "none"
        document.getElementById('xEmail').style.borderColor = "black"
 

    } else {
        document.getElementById('em_check').style.display = "block"
        document.getElementById('xEmail').style.borderColor = "red"
        document.getElementsByClassName('svg1')[0].style.display = "block"
    }

    //************* for tel Validation *****************************

    let inputTel = xTel.value;
    // let validTel = /[0-9]*$/;
    if (inputTel.length == 10) {
        document.getElementsByClassName('svg1')[1].style.display = "none"
        document.getElementById('tel_check').style.display = "none";
        document.getElementById('xTel').style.borderColor = "black"

        

    } else {
        document.getElementsByClassName('svg1')[1].style.display = "block"
        document.getElementById('tel_check').style.display = "block"
        document.getElementById('xTel').style.borderColor = "red"

    }
    //************* for Pass Validation *****************************
    let inputPass = xPass.value;

    if (inputPass.length < 6) {
        document.getElementsByClassName('svg1')[2].style.display = "none"
        document.getElementById('pass_check_18').style.display = "none";
        document.getElementById('xPass').style.borderColor = "black"

    } else {
        document.getElementsByClassName('svg1')[2].style.display = "block"
        document.getElementById('pass_check_18').style.display = "block"
        document.getElementById('xPass').style.borderColor = "red"

    }

    if (inputPass.length <= 18 && inputPass.length >= 6) {
        document.getElementsByClassName('svg1')[2].style.display = "none"
        document.getElementsByClassName('svg1')[3].style.display = "none"
        document.getElementById('pass_check_18').style.display = "none"
        document.getElementById('pass_check_6').style.display = "none";
        document.getElementById('xPass').style.borderColor = "black"
   
    }

    else if (inputPass.length > 18) {
        document.getElementsByClassName('svg1')[3].style.display = "none"
        document.getElementById('pass_check_6').style.display = "none";
        document.getElementById('xPass').style.borderColor = "red"

    } else {
        document.getElementsByClassName('svg1')[3].style.display = "block"
        document.getElementById('pass_check_6').style.display = "block"
        document.getElementById('xPass').style.borderColor = "red"

    }    if(inputPass.length <= 18 && inputPass.length >= 6 && inputTel.length == 10 && inputMail.match(validMail)){
        
   //  stores items in the localStorage  ***********************************************
        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        formData.push({ Mail:inputMail, Pass:inputPass, Tell:inputTel});
        localStorage.setItem('formData', JSON.stringify(formData));
        window.open("./index_log in.html" );
 

    }

 }


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#xPass');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

