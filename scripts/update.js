function updateAnnouncements(text) {
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
    fetch(file, {'mode': 'no-cors'})
        .then(response => response.text())
        .then(text => updateAnnouncements(text))
    // outputs the content of the text file
}

function readNew(file) {
    const contents = readFileSync(file, 'utf-8');
    updateAnnouncements(contents);
}