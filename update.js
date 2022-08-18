function updateAnnouncements() {
    text = readTextFile("announcements.txt");

    var arr = text.split("\n");
    var annList = document.getElementById("announcements-list");
    var docFrag = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {

        let re = /[^|]+/g
        let parsedText = arr[i].match(re)
        let eventTitle = parsedText[0];
        let eventDate = parsedText[1];
        let eventDescription = parsedText[2];

        var tempNode = document.querySelector("a[data-type='template']").cloneNode(true);
        tempNode.querySelector("h5").innerText = eventTitle;
        tempNode.querySelector("small").innerText = eventDate;
        tempNode.querySelector("p").innerText = eventDescription;
        tempNode.style.display = "block";
        docFrag.appendChild(tempNode);
    }
    
    annList.appendChild(docFrag);
    delete docFrag;
}

function updateGallery() {

}

function readTextFile(file) {

    fetch(file)
        .then(response => response.text())
        .then(text => console.log(text))
    
    // outputs the content of the text file
    //var text = "hello | this | is a test \n this is | still | testing";
    return text;
}