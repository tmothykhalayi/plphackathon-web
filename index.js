// Get all elements with class "tab-links" and "tab-contents"
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    // Remove the "active-link" class from all tab-links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove the "active-tab" class from all tab-contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add the "active-link" class to the clicked tab
    event.currentTarget.classList.add("active-link");

    // Add the "active-tab" class to the associated tab-content
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxqZl7yzS3AHp46-vsUrbl4X2mGNFc2yTai-gWgYTJY51hcJxK9wPfLQLhGhnqLGxva/exec'
const form = document.forms['submit-to-google-sheet']
const Msg = document.getElementById("Msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        Msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            Msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})