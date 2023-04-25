var button = document.querySelector(".btn-btt"), html = document.querySelector("html"), errorMsg = document.querySelector(".error-msg"), input = document.querySelector("input"); window.addEventListener("scroll", function () { html.scrollTop > 1113 ? button.style.display = "block" : html.scrollTop < 1113 && (button.style.display = "none") }), button.addEventListener("click", function () { html.scrollTo(0, 0) }), window.matchMedia("(max-width: 400px)").matches && window.addEventListener("scroll", function () { html.scrollTop > 689 ? button.style.display = "block" : html.scrollTop < 689 && (button.style.display = "none") }), input.addEventListener("invalid", function (t) { t.preventDefault() }), input.addEventListener("keypress", function () { input.checkValidity() ? input.checkValidity() && (errorMsg.innerHTML = " ") : errorMsg.innerHTML = "Please enter a valid email address" });

window.onscroll = function () {myFunction()}

function myFunction() {
    var winScroll = document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scroll = (winScroll/height) * 100
    document.getElementById("myBar").style.width = scroll + "%"
}