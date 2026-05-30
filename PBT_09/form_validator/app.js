const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const nameMsg = document.getElementById("nameMsg");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const confirmMsg = document.getElementById("confirmMsg");
const phoneMsg = document.getElementById("phoneMsg");

const strengthBar = document.getElementById("strengthBar");
const submitBtn = document.getElementById("submitBtn");

let nameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmValid = false;
let phoneValid = false;

/* NAME */

nameInput.addEventListener("input", function(){

    const value = this.value.trim();

    if(value.length >= 2 && value.length <= 50){

        nameMsg.textContent = "✅";
        nameMsg.className = "success";

        nameValid = true;
    }
    else{

        nameMsg.textContent = "❌";
        nameMsg.className = "error";

        nameValid = false;
    }

    checkForm();
});

/* EMAIL */

emailInput.addEventListener("input", function(){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(this.value)){

        emailMsg.textContent = "Email hợp lệ";
        emailMsg.className = "success";

        emailValid = true;
    }
    else{

        emailMsg.textContent =
        "Email phải có dạng example@gmail.com";

        emailMsg.className = "error";

        emailValid = false;
    }

    checkForm();
});

/* PASSWORD */

passwordInput.addEventListener("input", function(){

    const value = this.value;

    passwordValid = false;

    if(value.length < 8){

        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";

        passwordMsg.textContent = "Yếu";
        passwordMsg.className = "error";
    }

    else if(
        value.length >= 8 &&
        /[a-zA-Z]/.test(value) &&
        /\d/.test(value)
    ){

        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";

        passwordMsg.textContent = "Trung bình";

        passwordValid = true;
    }

    if(
        value.length >= 8 &&
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value)
    ){

        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";

        passwordMsg.textContent = "Mạnh";

        passwordValid = true;
    }

    checkConfirm();
    checkForm();
});

/* CONFIRM PASSWORD */

confirmInput.addEventListener("input", checkConfirm);

function checkConfirm(){

    if(
        confirmInput.value === passwordInput.value &&
        confirmInput.value !== ""
    ){

        confirmMsg.textContent =
        "Mật khẩu khớp";

        confirmMsg.className =
        "success";

        confirmValid = true;
    }
    else{

        confirmMsg.textContent =
        "Mật khẩu không khớp";

        confirmMsg.className =
        "error";

        confirmValid = false;
    }

    checkForm();
}

/* PHONE */

phoneInput.addEventListener("input", function(){

    let value = this.value.replace(/\D/g,"");

    if(value.length > 10){
        value = value.slice(0,10);
    }

    let formatted = "";

    if(value.length <= 4){

        formatted = value;
    }
    else if(value.length <= 7){

        formatted =
        value.slice(0,4)
        + "-"
        + value.slice(4);
    }
    else{

        formatted =
        value.slice(0,4)
        + "-"
        + value.slice(4,7)
        + "-"
        + value.slice(7);
    }

    this.value = formatted;

    if(value.length === 10){

        phoneMsg.textContent =
        "Số điện thoại hợp lệ";

        phoneMsg.className =
        "success";

        phoneValid = true;
    }
    else{

        phoneMsg.textContent =
        "Số điện thoại phải có 10 chữ số";

        phoneMsg.className =
        "error";

        phoneValid = false;
    }

    checkForm();
});

/* CHECK FORM */

function checkForm(){

    submitBtn.disabled = !(
        nameValid &&
        emailValid &&
        passwordValid &&
        confirmValid &&
        phoneValid
    );
}

/* SUBMIT */

form.addEventListener("submit", function(e){

    e.preventDefault();

    const modal =
    document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">
            <h2>Đăng ký thành công!</h2>

            <p><strong>Họ tên:</strong> ${nameInput.value}</p>

            <p><strong>Email:</strong> ${emailInput.value}</p>

            <p><strong>Số điện thoại:</strong> ${phoneInput.value}</p>

            <button id="closeBtn">
                Đóng
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("closeBtn")
        .addEventListener("click", function(){

            modal.remove();
        });
});