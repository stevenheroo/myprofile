// const updateButton = document.getElementById('updateDetails');
// const favDialog = document.getElementById('modal');
// const outputBox = document.querySelector('output');
// const selectEl = favDialog.querySelector('select');
// const confirmBtn = favDialog.querySelector('#confirmBtn');

// // If a browser doesn't support the dialog, then hide the
// // dialog contents by default.
// if (typeof favDialog.showModal !== 'function') {
//   favDialog.hidden = true;
//   /* a fallback script to allow this dialog/form to function
//      for legacy browsers that do not support <dialog>
//      could be provided here.
//   */
// }
// // "Update details" button opens the <dialog> modally
// updateButton.addEventListener('click', () => {
//   if (typeof favDialog.showModal === "function") {
//     favDialog.showModal();
//   } else {
//     outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
//   }
// });
// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener('change', (e) => {
//   confirmBtn.value = selectEl.value;
// });
// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', () => {
//   outputBox.value = `${favDialog.returnValue} button clicked - ${(new Date()).toString()}`;
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("updateDetails");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}