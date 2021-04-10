//Hello world 

const eng_flag = document.getElementById("english");
const pl_flag = document.getElementById("polish");

const all_eng_text = document.getElementsByClassName("en");
const all_pl_text = document.getElementsByClassName("pl");


eng_flag.addEventListener("click", () => {
    console.log("Eng lang")
    for (let index = 0; index < all_pl_text.length; index++) {
        const element = all_pl_text[index];
        element.style.display = "none";

    }
    for (let index = 0; index < all_eng_text.length; index++) {
        const element = all_eng_text[index];
        element.style.display = "flex";

    }
});

pl_flag.addEventListener("click", () => {
    console.log("Pol lang")
    for (let index = 0; index < all_eng_text.length; index++) {
        const element = all_eng_text[index];
        element.style.display = "none";

    }
    for (let index = 0; index < all_pl_text.length; index++) {
        const element = all_pl_text[index];
        element.style.display = "flex";

    }
});