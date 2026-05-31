const images = [
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1025/600/350",
    "https://picsum.photos/id/1035/600/350",
    "https://picsum.photos/id/1045/600/350",
    "https://picsum.photos/id/1055/600/350",
    "https://picsum.photos/id/1065/600/350",
    "https://picsum.photos/id/1075/600/350",
    "https://picsum.photos/id/1084/600/350",
    "https://picsum.photos/id/1080/600/350"
];

let currentIndex = 0;
let slideshow = null;

const image =
    document.getElementById("galleryImage");

const palette =
    document.getElementById("palette");

const commandInput =
    document.getElementById("commandInput");

const commandList =
    document.getElementById("commandList");

const commands = [
    "Next Image",
    "Previous Image",
    "Start Slideshow",
    "Stop Slideshow",
    "First Image",
    "Last Image"
];

function showImage(){

    image.src =
        images[currentIndex];
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex =
            images.length - 1;
    }

    showImage();
}

document
.getElementById("nextBtn")
.addEventListener("click",
nextImage);

document
.getElementById("prevBtn")
.addEventListener("click",
prevImage);

/* KEYBOARD */

document.addEventListener(
"keydown",
function(e){

    if(
        e.ctrlKey &&
        e.key.toLowerCase() === "k"
    ){

        e.preventDefault();

        palette.style.display =
            "flex";

        commandInput.focus();

        renderCommands(commands);

        return;
    }

    if(e.key === "Escape"){

        palette.style.display =
            "none";
    }

    if(e.key === "ArrowRight"){

        nextImage();
    }

    if(e.key === "ArrowLeft"){

        prevImage();
    }

    if(e.key === " "){

        e.preventDefault();

        toggleSlideshow();
    }

    if(
        e.key >= "1" &&
        e.key <= "9"
    ){

        const index =
            Number(e.key) - 1;

        if(index < images.length){

            currentIndex =
                index;

            showImage();
        }
    }
});

/* SLIDESHOW */

function toggleSlideshow(){

    if(slideshow){

        clearInterval(slideshow);

        slideshow = null;
    }
    else{

        slideshow =
        setInterval(
            nextImage,
            2000
        );
    }
}

/* COMMAND PALETTE */

function renderCommands(list){

    commandList.innerHTML = "";

    list.forEach(command => {

        const li =
            document.createElement("li");

        li.textContent =
            command;

        commandList
            .appendChild(li);
    });
}

commandInput.addEventListener(
"input",
function(){

    const text =
        this.value.toLowerCase();

    const result =
        commands.filter(cmd =>
            cmd
            .toLowerCase()
            .includes(text)
        );

    renderCommands(result);
});

commandInput.addEventListener(
"keydown",
function(e){

    if(e.key === "Enter"){

        const first =
            commandList
            .querySelector("li");

        if(!first) return;

        executeCommand(
            first.textContent
        );
    }
});

function executeCommand(cmd){

    if(cmd === "Next Image"){
        nextImage();
    }

    if(cmd === "Previous Image"){
        prevImage();
    }

    if(cmd === "Start Slideshow"){

        if(!slideshow){
            toggleSlideshow();
        }
    }

    if(cmd === "Stop Slideshow"){

        if(slideshow){
            toggleSlideshow();
        }
    }

    if(cmd === "First Image"){

        currentIndex = 0;
        showImage();
    }

    if(cmd === "Last Image"){

        currentIndex =
            images.length - 1;

        showImage();
    }

    palette.style.display =
        "none";
}