let students = [];

let editIndex = null;
/* =========================
    HIỂN THỊ DANH SÁCH
========================= */

function renderStudents(){

    studentTableBody.innerHTML = "";

    /* KHÔNG CÓ DỮ LIỆU */

    if(students.length === 0){

        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    Chưa có sinh viên nào
                </td>
            </tr>
        `;

        return;
    }

    /* CÓ DỮ LIỆU */

    students.forEach(function(student, index){

        studentTableBody.innerHTML += `

            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birth}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="editBtn"
                        onclick="editStudent(${index})">

                        Sửa

                    </button>

                    <button
                        class="deleteBtn"
                        onclick="deleteStudent(${index})">

                        Xóa

                    </button>

                </td>

            </tr>

        `;

    });

}

function editStudent(index){

    editIndex = index;

    const student = students[index];

    studentId.value = student.id;

    fullName.value = student.name;

    birthDate.value = student.birth;

    className.value = student.className;

    score.value = student.score;

    email.value = student.email;

    studentModal.style.display = "block";

}

/* =========================
    XÓA SINH VIÊN
========================= */

function deleteStudent(index){

    const confirmDelete =
        confirm("Bạn có chắc muốn xóa?");

    if(confirmDelete){

        students.splice(index, 1);

        renderStudents();

        message.innerText =
            "Xóa sinh viên thành công";

    }

}

const studentTableBody =
    document.getElementById("studentTableBody");
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
     editIndex = null;
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
     if(editIndex === null){

        students.push(student);

        message.innerText = "Thêm sinh viên thành công";

    }
    else{

        students[editIndex] = student;

        message.innerText = "Cập nhật sinh viên thành công";

    }

    renderStudents();

    resetForm();

    studentModal.style.display = "none";

});

renderStudents();