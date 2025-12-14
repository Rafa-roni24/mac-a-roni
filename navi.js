var counter = 0;
var myObj;
/*
var theList = {
    "main" : [
    "https://media.tenor.co/j2nm-x4S08MAAAAM/african-kid-africa.gif", "https://w7.pngwing.com/pngs/1008/247/png-transparent-multimedia-projectors-projector-thumbnail.png", "https://media.tenor.co/OOGWddTK-KMAAAAC/thunder-elmo.gif", "https://raw.githubusercontent.com/Rafa-roni24/mac-a-roni/49827b359a620d671e0748148f5b6e3d8fa6dc0e/assets/tux.png"
    ]
}
*/

function getList(){
    const xhr = new XMLHttpRequest();
        xhr.open('GET', 'database.json', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                myObj = JSON.parse(this.responseText);
                document.getElementById("slideshow").src = myObj.main[counter].url;
                document.getElementById("author").innerText = myObj.main[counter].author;
            } else {
                document.getElementById("output").innerHTML = 'Error fetching JSON:' + xhr.statusText;
            }
        };

        xhr.send();
}

function nextButton(){
    //document.getElementById("someText").innerText = "some other important text"
    //document.getElementById("slideshow").src= "https://w7.pngwing.com/pngs/1008/247/png-transparent-multimedia-projectors-projector-thumbnail.png";
    document.getElementById("slideshow").src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
    counter++;
}

function prevButton(){
    document.getElementById("slideshow").src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
    counter--;
}