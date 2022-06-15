 // When the user clicks on div, open the popup

//select popup with id, assign to variable to be manipulated
const popup = document.querySelector('#myPopup');
const overlay = document.getElementById('overlay');
 //function to detect clicks
function myFunction(event) {
    popup.classList.add('show');
    overlay.classList.add('active');
}
  
overlay.addEventListener('click', function() {
    closePopup(popup);
})


function closePopup(popup) {
    popup.classList.remove('show');
    overlay.classList.remove('active');
}


// document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.querySelector("myPopup");
//     if (!box.contains(event.target)) {
//       box.style.display = 'none';
//     }
//   });