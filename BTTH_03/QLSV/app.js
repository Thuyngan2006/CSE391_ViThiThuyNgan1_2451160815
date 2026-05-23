const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const studentModal = document.getElementById("studentModal");

const modalTitle = document.getElementById("modalTitle");

const message = document.getElementById("message");

const totalStudents = document.getElementById("totalStudents");

const avgScore = document.getElementById("avgScore");
modalTitle.innerText = "Form Quản Lý Sinh Viên";

message.innerText = "Chào mừng bạn đến hệ thống";

totalStudents.innerText = 0;

avgScore.innerText = 0;

openModalBtn.addEventListener("click", function(){

    studentModal.style.display = "block";

});

closeModalBtn.addEventListener("click", function(){

    studentModal.style.display = "none";

});
/* =========================
    INPUT
========================= */

const studentId = document.getElementById("studentId");

const fullName = document.getElementById("fullName");

const birthDate = document.getElementById("birthDate");

const className = document.getElementById("className");

const score = document.getElementById("score");

const email = document.getElementById("email");

/* =========================
    RESET FORM
========================= */

function resetForm(){

    studentForm.reset();

}

/* =========================
    NÚT HỦY
========================= */

cancelBtn.addEventListener("click", function(){

    resetForm();

    studentModal.style.display = "none";

});

/* =========================
    SUBMIT FORM
========================= */

studentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        id: studentId.value,

        name: fullName.value,

        birth: birthDate.value,

        className: className.value,

        score: score.value,

        email: email.value

    };

    console.log(student);

    message.innerText = "Lấy dữ liệu thành công";

    resetForm();

    studentModal.style.display = "none";

});