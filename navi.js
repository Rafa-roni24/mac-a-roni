var counter = 0;
var myObj;
var img;
var newSrc;

const overlayOpts = {
    spinnerIcon: 'newt-cradle',
    overlayBackgroundColor: 'rgba(255,255,255,0.8)'
};

function getList(){
    img = document.getElementById("slideshow");
    const xhr = new XMLHttpRequest();
        xhr.open('GET', 'database.json', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                myObj = JSON.parse(this.responseText);
                newSrc = myObj.main[counter].url;
                
                JsLoadingOverlay.show(overlayOpts); 
                img.onload = () => {
                  JsLoadingOverlay.hide(); 
                };

                img.src = newSrc;
                document.getElementById("author").innerText = myObj.main[counter].author;
                
                let isClicked = false; 

                document.getElementById("nb").addEventListener("click", () => {
                    if (isClicked) return;
                    // Trigger loader on specific element click if needed
                    JsLoadingOverlay.show(overlayOpts);
                    img.onload = () => {
                      JsLoadingOverlay.hide(); 
                    };
                    img.src = newSrc;
                });
            } else {
                document.getElementById("output").innerHTML = 'Error fetching JSON:' + xhr.statusText;
            }
        };

        xhr.send();
}

function nextButton(){
    // if (counter == myObj.main.length-1) return;
    counter++;
    
    JsLoadingOverlay.show(overlayOpts); 
    img.onload = () => {
      JsLoadingOverlay.hide(); 
    };

    img.src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
    
    console.log(counter, img.src, myObj.main[counter].author);
}

function prevButton(){
    // if (counter == 0) return;
    counter--;

    JsLoadingOverlay.show(overlayOpts); 
    img.onload = () => {
      JsLoadingOverlay.hide(); 
    };

    document.getElementById("slideshow").src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
    console.log(counter);
}