var counter = 0;
var myObj;
var img;
var newSrc;

const overlayOpts = {
    spinnerIcon: 'ball-clip-rotate',
    overlayBackgroundColor: '#ffffff',
    spinnerColor: '#000000',
    spinnerSize: '2x'
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
                  // Wait 1000ms (1 second) before hiding
                  setTimeout(() => {
                    JsLoadingOverlay.hide(); 
                  }, 1000);
                };
                img.src = newSrc;
                /*document.getElementById("author").innerText = myObj.main[counter].author;
                document.getElementById("slideshow").src = myObj.main[counter].url;
                */
                let isClicked = false; // Initialize a flag

                  document.getElementById("nb").addEventListener("click", () => {
                    if (isClicked) return;

                    JsLoadingOverlay.show(overlayOpts);
                    
                    img.onload = () => {
                      setTimeout(() => {
                        JsLoadingOverlay.hide(); 
                      }, 1000);
                    };
                    img.src = newSrc;
                  });
                
                document.getElementById("author").innerText = myObj.main[counter].author;
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
      //1mlsc = 1sc
      setTimeout(() => {
        JsLoadingOverlay.hide(); 
      }, 1000);
    };

    img.src = myObj.main[counter].url;
    console.log(counter, img.src, myObj.main[counter].author);
    
    //document.getElementById("someText").innerText = "some other important text"
    //document.getElementById("slideshow").src= "https://w7.pngwing.com/pngs/1008/247/png-transparent-multimedia-projectors-projector-thumbnail.png";
    document.getElementById("slideshow").src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
}

function prevButton(){
    // if (counter == 0) return;
    counter--;

    JsLoadingOverlay.show(overlayOpts);
    img.onload = () => {
      // 1k milsc = 1 sc
      setTimeout(() => {
        JsLoadingOverlay.hide(); 
      }, 1000);
    };

    console.log(counter)
    document.getElementById("slideshow").src = myObj.main[counter].url;
    document.getElementById("author").innerText = myObj.main[counter].author;
}
