/* =========================
    DOM
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
    DATA
========================= */

let tasks = [];

let editIndex = null;

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

        resetForm();

        taskModal.style.display =
            "none";

    }
);

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

            <div class="task-card
                ${task.completed ? "completed" : ""}
            ">

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
                    ${
                        task.completed
                        ? "Đã hoàn thành"
                        : "Chưa hoàn thành"
                    }

                </p>

                <div class="task-actions">

                    <button
                        class="completeBtn"
                        onclick="toggleTask(${index})">

                        ${
                            task.completed
                            ? "Hoàn tác"
                            : "Hoàn thành"
                        }

                    </button>

                    <button
                        class="editBtn"
                        onclick="editTask(${index})">

                        Sửa

                    </button>

                    <button
                        class="deleteBtn"
                        onclick="deleteTask(${index})">

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

        const task = {

            title:
                taskTitle.value,

            description:
                taskDescription.value,

            deadline:
                taskDeadline.value,

            priority:
                taskPriority.value,

            completed:false

        };

        /* THÊM */

        if(editIndex === null){

            tasks.push(task);

        }

        /* CẬP NHẬT */

        else{

            task.completed =
                tasks[editIndex].completed;

            tasks[editIndex] = task;

        }

        renderTasks();

        resetForm();

        taskModal.style.display =
            "none";

    }
);

/* =========================
    RESET FORM
========================= */

function resetForm(){

    taskForm.reset();

    editIndex = null;

}

/* =========================
    SỬA CÔNG VIỆC
========================= */

function editTask(index){

    editIndex = index;

    const task = tasks[index];

    taskTitle.value =
        task.title;

    taskDescription.value =
        task.description;

    taskDeadline.value =
        task.deadline;

    taskPriority.value =
        task.priority;

    taskModal.style.display =
        "block";

}

/* =========================
    XÓA CÔNG VIỆC
========================= */

function deleteTask(index){

    const confirmDelete =
        confirm("Bạn có chắc muốn xóa?");

    if(confirmDelete){

        tasks.splice(index, 1);

        renderTasks();

    }

}

/* =========================
    ĐỔI TRẠNG THÁI
========================= */

function toggleTask(index){

    tasks[index].completed =
        !tasks[index].completed;

    renderTasks();

}

/* =========================
    CHẠY LẦN ĐẦU
========================= */

renderTasks();