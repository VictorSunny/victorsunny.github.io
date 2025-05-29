console.log("running javascript");

// import closeIcon from "../assets/close-icon.svg";

var main = document.getElementsByTagName("main");
var overlay = document.getElementById("general-overlay");

var images = document.getElementsByClassName("slider-image");

document.addEventListener('keydown', function(event) {
  if (event.key == 'Escape' || event.key == 'Enter' || event.key == ' ') {
    closeOverlay()
  }
});

Array.from(images).forEach(photo => {
   photo.addEventListener('click', focusOverlay)
});

 function focusOverlay(element) {

   console.log("photo clicked")

    let image = element.target;
    let copyImage = image.cloneNode(true)

    overlay.classList.toggle("overlay-active");
    overlay.addEventListener('click', closeOverlay)
    document.body.classList.toggle("focused");
    
    let closeButton = document.createElement("img");
    closeButton.src = "../assets/icons/close-icon.svg";
    closeButton.id = "close-focus-btn";
    closeButton.onclick = closeOverlay;

    let focusedComponent = document.createElement("div");

    copyImage.id = "focused-image";
    focusedComponent.id = "focused-component";

    focusedComponent.appendChild(copyImage);
    focusedComponent.appendChild(closeButton);
    overlay.appendChild(focusedComponent);

 };

 function closeOverlay() {
   console.log("close overlay")
   focusedComponent = document.getElementById("focused-component");

   overlay.removeChild(focusedComponent);
   overlay.classList.remove("overlay-active");
   document.body.classList.remove("focused");
 };

