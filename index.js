 // When the user clicks on div, open the popup
 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
  
document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.querySelector("show");
    if (!box.contains(event.target)) {
      box.style.display = 'none';
    }
  });