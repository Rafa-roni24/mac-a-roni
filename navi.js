var counter = 0;

var theList = {
    "main" : [
    "https://media.tenor.co/j2nm-x4S08MAAAAM/african-kid-africa.gif", "https://w7.pngwing.com/pngs/1008/247/png-transparent-multimedia-projectors-projector-thumbnail.png", "https://media.tenor.co/OOGWddTK-KMAAAAC/thunder-elmo.gif"
    ]
} 

function doitnow(){
    //document.getElementById("someText").innerText = "some other important text"
    //document.getElementById("slideshow").src= "https://w7.pngwing.com/pngs/1008/247/png-transparent-multimedia-projectors-projector-thumbnail.png";
    counter++;
    document.getElementById("slideshow").src = theList.main[counter];
}