window.addEventListener("scroll", function () {
  var header = document.querySelector(".header")
  if (this.window.scrollY > 130) {
    header.classList.add("sticky", window.scrollY > 0)
  } else {
    header.classList.remove("sticky", window.scrollY > 0)
  }
})
