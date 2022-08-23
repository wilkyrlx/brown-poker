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

    var fr = new FileReader();
    fr.onload = function(e) {
        // e.target.result should contain the text
        console.log(e.target.result);
        updateAnnouncements(e.target.result);
    };
    fr.readAsText(file);

}

function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    console.log("File " + oFrame.src + " has " + arrLines.length + " lines");
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        console.log("Line #" + (i + 1) + " is: '" + curLine + "'");
    }
}
