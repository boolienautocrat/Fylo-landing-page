var button = document.querySelector(".btn-btt")
var html = document.querySelector("html")


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