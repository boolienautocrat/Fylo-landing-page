var button = document.querySelector(".btn-btt")
var html = document.querySelector("html")
var errorMsg = document.querySelector(".error-msg")
var input = document.querySelector("input")


window.addEventListener("scroll", function () {
    if (html.scrollTop > 1113) {
        button.style.display = "block"
    } else if (html.scrollTop < 1113) {
        button.style.display = "none"
    }
})

button.addEventListener("click", function () {
    html.scrollTo(0, 0)
})

if (window.matchMedia("(max-width: 400px)").matches) {
    window.addEventListener("scroll", function () {
        if (html.scrollTop > 689) {
            button.style.display = "block"
        } else if (html.scrollTop < 689) {
            button.style.display = "none"
        }
    })
}

input.addEventListener("invalid",
    function (e) {
        e.preventDefault();
    });

input.addEventListener("keypress", function () {
    if (!input.checkValidity()) {
        errorMsg.innerHTML = "Please enter a valid email address"
    } else if (input.checkValidity()) {
        errorMsg.innerHTML = " "
    }
})