function home() {
    document.querySelector("#img").src="./img.jpg";
    document.querySelector("#home-link").classList.add("active");
    document.querySelector("#work-link").classList.remove("active");
    document.querySelector("#blog-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");
}


function work() {
    document.querySelector("#img").src="./img1.jpg";
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#work-link").classList.add("active");
    document.querySelector("#blog-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");
}


function blog() {
    document.querySelector("#img").src="./img2.jpg";
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#work-link").classList.remove("active");
    document.querySelector("#blog-link").classList.add("active");
    document.querySelector("#about-link").classList.remove("active");
}

function about() {
    document.querySelector("#img").src="./img3.jpg";
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#work-link").classList.remove("active");
    document.querySelector("#blog-link").classList.remove("active");
    document.querySelector("#about-link").classList.add("active");
}
