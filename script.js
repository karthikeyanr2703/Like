let image = document.querySelector(".container");
let heartIcon = document.querySelector("#like");

image.addEventListener("dblclick", () => {
  heartIcon.style.opacity = 0.7;
  heartIcon.style.transform = "translate(-50%, -50%) scale(1.8)";
  setTimeout(() => {
    heartIcon.style.opacity = 0;
  }, 920);
  
});
