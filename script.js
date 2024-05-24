// scripts.js

function showContent(contentNumber) {
    console.log('showContent kaldt med contentNumber:', contentNumber);

    // Skjul alt indhold
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // Vis det valgte indhold
    var contentId = "content" + contentNumber;
    console.log('contentId:', contentId);
    var selectedContent = document.getElementById(contentId);
    console.log('selectedContent:', selectedContent);
    selectedContent.classList.add("active");

    // Fjern klassen "active" fra alle li-elementer
    var navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Tilføj klassen "active" til det klikkede li-element
    var clickedNavItem = document.querySelector('.navbar li:nth-child(' + contentNumber + ')');
    clickedNavItem.classList.add('active');
}




function goBack() {
    window.history.back();
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}