/* =========================
    LẤY DOM
========================= */

const openModalBtn =
    document.getElementById("openModalBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const cancelBtn =
    document.getElementById("cancelBtn");

const taskModal =
    document.getElementById("taskModal");

const modalTitle =
    document.getElementById("modalTitle");

const message =
    document.getElementById("message");

const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const pendingTasks =
    document.getElementById("pendingTasks");

const taskList =
    document.getElementById("taskList");

/* =========================
    THAY ĐỔI NỘI DUNG
========================= */

modalTitle.innerText =
    "Form Quản Lý Công Việc";

message.innerText =
    "Chào mừng bạn đến hệ thống quản lý công việc";

totalTasks.innerText = 0;

completedTasks.innerText = 0;

pendingTasks.innerText = 0;

/* =========================
    MỞ MODAL
========================= */

openModalBtn.addEventListener(
    "click",
    function(){

        taskModal.style.display =
            "block";

    }
);

/* =========================
    ĐÓNG MODAL
========================= */

closeModalBtn.addEventListener(
    "click",
    function(){

        taskModal.style.display =
            "none";

    }
);

/* =========================
    NÚT HỦY
========================= */

cancelBtn.addEventListener(
    "click",
    function(){

        taskModal.style.display =
            "none";

    }
);

/* =========================
    MẢNG DỮ LIỆU
========================= */

let tasks = [];

/* =========================
    FORM
========================= */

const taskForm =
    document.getElementById("taskForm");

const taskTitle =
    document.getElementById("taskTitle");

const taskDescription =
    document.getElementById("taskDescription");

const taskDeadline =
    document.getElementById("taskDeadline");

const taskPriority =
    document.getElementById("taskPriority");

/* =========================
    HIỂN THỊ DANH SÁCH
========================= */

function renderTasks(){

    taskList.innerHTML = "";

    /* KHÔNG CÓ DỮ LIỆU */

    if(tasks.length === 0){

        taskList.innerHTML = `

            <h3>

                Chưa có công việc nào

            </h3>

        `;

        return;
    }

    /* CÓ DỮ LIỆU */

    tasks.forEach(function(task, index){

        taskList.innerHTML += `

            <div class="task-card">

                <h3>

                    ${task.title}

                </h3>

                <p>

                    ${task.description}

                </p>

                <p>

                    Hạn:
                    ${task.deadline}

                </p>

                <p>

                    Ưu tiên:
                    ${task.priority}

                </p>

                <p>

                    Trạng thái:
                    Chưa hoàn thành

                </p>

                <div class="task-actions">

                    <button class="editBtn">

                        Sửa

                    </button>

                    <button class="deleteBtn">

                        Xóa

                    </button>

                </div>

            </div>

        `;

    });

}

/* =========================
    SUBMIT FORM
========================= */

taskForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        /* TẠO OBJECT */

        const task = {

            title: taskTitle.value,

            description:
                taskDescription.value,

            deadline:
                taskDeadline.value,

            priority:
                taskPriority.value

        };

        /* THÊM MẢNG */

        tasks.push(task);

        /* RENDER */

        renderTasks();

        /* ĐÓNG MODAL */

        taskModal.style.display =
            "none";

        /* RESET FORM */

        taskForm.reset();

    }
);

/* =========================
    CHẠY LẦN ĐẦU
========================= */

renderTasks();