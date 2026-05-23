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

