var counter = 0;
var myObj;
var img;
var newSrc;
var isLoading = false;

const overlayOpts = {
    spinnerIcon: 'ball-clip-rotate',
    overlayBackgroundColor: '#ffffff',
    spinnerColor: '#000000',
    spinnerSize: '2x'
};

function getList(){
  if (window.innerWidth <= 768) {
      //console.log("Mobile device");
        document.body.innerHTML += "<p>Mobile device</p>";
    } else {
      //console.log("Desktop device");
        document.body.innerHTML += "<p>Desktop device</p>";
    }

    img = document.getElementById("slideshow");
    const xhr = new XMLHttpRequest();
        xhr.open('GET', 'database.json', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                myObj = JSON.parse(this.responseText);
                newSrc = myObj.main[counter].url;
                
                isLoading = true;
                JsLoadingOverlay.show(overlayOpts);
                img.onload = () => {
                  setTimeout(() => {
                    JsLoadingOverlay.hide(); 
                    isLoading = false;
                  }, 1000);
                };
                img.src = newSrc;
                /*document.getElementById("author").innerText = myObj.main[counter].author;
                document.getElementById("slideshow").src = myObj.main[counter].url;
                */
                let isClicked = false; // Initialize a flag
                resize_pic();
                document.getElementById("author").innerText = myObj.main[counter].author;
            } else {
                document.getElementById("output").innerHTML = 'Error fetching JSON:' + xhr.statusText;
            }
        };

        xhr.send();
}

function nextButton(){
    if (counter == myObj.main.length-1) return;
    else{
      counter++;

      isLoading = true;
      JsLoadingOverlay.show(overlayOpts);
      img.onload = () => {
        setTimeout(() => {
          JsLoadingOverlay.hide(); 
          isLoading = false;
        }, 1000);
      };

      img.src = myObj.main[counter].url;
      console.log(counter, img.src, myObj.main[counter].author);
      document.getElementById("slideshow").src = myObj.main[counter].url;
      document.getElementById("author").innerText = myObj.main[counter].author;
  }
  resize_pic();
}

function prevButton(){
    if (!counter) return;
    else{
      counter--;

      isLoading = true;
      JsLoadingOverlay.show(overlayOpts);
      img.onload = () => {
        setTimeout(() => {
          JsLoadingOverlay.hide(); 
          isLoading = false;
        }, 1000);
      };

      console.log(counter)
      document.getElementById("slideshow").src = myObj.main[counter].url;
      document.getElementById("author").innerText = myObj.main[counter].author;
  }
  resize_pic();
}

function resize_pic(){
  if (window.innerWidth <= 768) {
    document.getElementById("slideshow").style.width = "100%";
    document.getElementById("slideshow").style.height = "auto";
  } else {
    document.getElementById("slideshow").style.width = "80%";
    document.getElementById("slideshow").style.height = "auto";
  }
  
  function make_it_clickable(){
    document.getElementById("slideshow").addEventListener('click', function() {
      window.open(myObj.main[counter].author, '_blank');
    });
  }
}