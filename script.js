//Multiple Modals
function OpenMore(n) {
    //Get elements with class="modal" into an array
    var modal = document.getElementsByClassName("modal");
    //Change style of modal number [n] to display = "block"
    modal[n].style.display = "block";
}

//This will close the modal once you click on it
window.onclick = function(event) {

    //For multiple modals
    var more = document.getElementsByClassName("modal");
    //i represents which modal. It will go through all modals
    for (var i = 0; i < more.length; i++) {
        //If the click was on the modal for one of the modals display = "none"
        //for all of them
        if (event.target == more[i]) {
            more[i].style.display = "none";
        }
    }
}
//Close button for modals
