let iconBoxes = document.querySelectorAll(".icon-box");
let inputBoxes = document.querySelectorAll(".input-box");
let textarea = document.querySelectorAll("textarea");

iconBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Display the corresponding input-box for the clicked icon-box
        let index = Array.from(iconBoxes).indexOf(box);
        inputBoxes.forEach((inputBox, i) => {
            if (i === index) {
                inputBox.classList.remove("hidde-input-box");
            } else {
                inputBox.classList.add("hidde-input-box");
            }
        });

        // Remove i-b-color from all icon-box elements
        iconBoxes.forEach((otherBox) => {
            otherBox.classList.remove("i-b-color");
        });
        // Add i-b-color to the clicked icon-box
        box.classList.add("i-b-color");
    });
});

// output section

let output = document.querySelector("#output");

let htmlCode, cssCode, jsCode;

let allInputBoxes = document.querySelectorAll("textarea");

allInputBoxes.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index === 0) {
            htmlCode = el.value;
            output.contentDocument.body.innerHTML = htmlCode;
        }
        if (index === 1) {
            cssCode = el.value;
            output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        }
        if (index === 2) {
            jsCode = el.value;
            output.contentWindow.eval(jsCode);
        }
    })
})

// output section end


//store program in localhost

//store program in localhost

