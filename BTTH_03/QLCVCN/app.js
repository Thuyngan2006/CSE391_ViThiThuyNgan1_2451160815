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