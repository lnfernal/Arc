/* Bookmarklet Styling & CSS|| By jango#5518 */
/* some additions by dexah#1946 */

// create a style sheet. don't remove this; it will break the page's appearance
let style = document.createElement("style");
document.head.appendChild(style);

// wraps the entire site in a div for putting buttons solely at the top
// eg. the exit button
let wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.append(wrapper);

// the exit button; located at the top of the page. used only for bookmarklet
let exit = document.createElement("button");
exit.id = "exit";
wrapper.appendChild(exit);
exit.onClick = function terminate() {wrapper.remove(); console.remove();};

// the main div of the bookmarklet. contains everything
let main = document.createElement("div");
main.id = "main";
wrapper.appendChild(main);
let logo = document.createElement("img");
logo.id = "logo";
main.appendChild(logo);
main.id = "main";

// title and author; located under the logo
let title = document.createElement("h1");
main.appendChild(title);
title.id = "title";
let author = document.createElement("h3");
main.appendChild(author);
author.id = "author";

// buttons for various things
let exp1 = document.createElement("button");
main.appendChild(exp1);
exp1.id = "exp1";
let exp2 = document.createElement("button");
main.appendChild(exp2);
exp2.id = "exp2";
let exp3 = document.createElement("button");
main.appendChild(exp3);
exp3.id = "exp3";


// a console; located under the main page. 
// this console is not affected by inspect element blocks

//let console = document.createElement("console");
//main.appendChild(console);
//divider1.id = "console";

// all textContent values excluding "style"
exit.textContent = "X";
title.textContent = "Komodo";
author.textContent = "Brought to you by Komodo Devs";
exp1.textContent = "IndexedDB Flooder";
exp2.textContent = "History Flooder";
exp3.textContent = "Exploit #3";

// creating modal popup classes for an easier way to notify users
// PopupMajor should appear in the middle of the screen and require confirmation. used for dangerous things
// PopupMinor should be a little notification sort of thing at the bottom of the screen

class PopupMajor {
  constructor(width, height, borderColor, text) {
    this.width = width;
    this.height = height;
    this.borderColor = borderColor;
    this.text = text;
    
    let mpe = document.createElement("div");
    mpe.style.top = "50%";
    mpe.style.left = "50%";
    mpe.style.width = width;
    mpe.style.height = height;
    mpe.style.background = "grey";
    mpe.style.position = "fixed";
    mpe.style.display = "fixed";
    mpe.style.transform = "translate(-50%, -50%)";
    mpe.style.borderRadius = "5px";
    mpe.style.padding = "10px";
    mpe.style.border = "solid";
    mpe.style.borderColor = borderColor;
    mpe.style.background = "#121212"

    let msg = document.createElement("p");
    msg.innerHTML = text;
    msg.style.color = "white";
    msg.style.fontFamily = "monospace";
    
    let ok = document.createElement("button");
    ok.style.top = "70px";
    ok.style.left = "50%";
    ok.textContent = "OK";
    ok.style.background = "lightgreen";
    ok.style.border = "none";
    ok.style.width = "40px";
    ok.style.height = "40px";
    ok.style.borderRadius = "5px";
    
    
    main.appendChild(mpe);
    mpe.appendChild(msg);
    mpe.appendChild(ok);

    ok.onclick = () => {mpe.style.display = "none";};
  }
}


class PopupMinor {
  constructor(text) {
    this.text = text;

    let mipe = document.createElement("div");
    mipe.style.bottom = "0%";
    mipe.style.left = "100%";
    mipe.style.width = "100px"
    mipe.style.height = "50px;"
    mipe.style.background = "blue";
    mipe.style.position = "absolute";
    mipe.style.display = "fixed";
    mipe.style.transform = "translate(-0%, -0%)";
    mipe.style.borderRadius = "5px";
    mipe.style.padding = "10px";
    mipe.style.border = "solid";
    mipe.style.background = "#121212"

    
    main.appendChild(mipe);
  }
}

let test = new PopupMinor("200px")

exp1.onclick = () => {
let warning1 = new PopupMajor("400px", "400px", "red", "Warning, you are about to run an exploit that can potentially crash your computer");
}

exp2.onclick = () => {
let warning2 = new PopupMajor("400px", "400px", "red", "Warning, you are about to run an exploit that can potentially crash your computer");
}

exp3.onclick = () => {
let warning3 = new PopupMajor("400px", "400px", "red", "ERROR! This exploit is not out yet! Please try again next time. ERROR CODE: 3o2i4jqKA");
}



// add the actual stylesheet to the style object
style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

#main {
font-family: Monospace;
  width: 600px;
  height: 550px;
  background-color: #121212;
  text-color: #1c9a54;
  text-align: center !important;
  margin: auto !important;
  /* width: 50%; */
  padding: 10px !important;
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
  border-radius: 10px !important;
  z-index: 99999 !important;
  animation-name: startup;
  animation-duration: 2s;
}




#title, #author {
  color: #1c9a54;
  font-family: Monospace;
}

#exp1, #exp2, #exp3 {
  vertical-align: center;
  background-color: #1c9a54;
  transition: 0.25s;
  font-family: "Comfortaa";
  border-style: solid;
  border-width: 2px;
  border-color: #1c9a54;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  align-content: space-between;
  margin: 5px;
  padding: 5px;
}

#exit {
  font-family: "monospace";
  align: left;
  background: none;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  background-color: #1c9a54;
  border-radius: 5px;
  display: block;
  text-scale: 10px;
}

#exp1:hover, #exp1:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

#exp2:hover, #exp2:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

#exp3:hover, #exp3:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

#divider1 {
    position: relative !important;
    margin-left: 10px !important;
    top: 100px !important;
    width: 580px !important;
    height: 3px !important;
    background-color: white;
    border-radius: 5px !important;
}

@keyframes startup {
0% {
opacity: 0%;
transform: rotate(-360deg);
50% {
opacity: 30%;
}
}
100% {
opacity: 100%; 
transform: rotate(0deg);
}

}
::-webkit-scrollbar {
    display: none;
};
`
// End CSS.

// functions for the buttons
// code in these will be executed when the respective button is pressed.
exp1.addEventListener("click", function () {
var open = indexedDB.open("zdc", 1); var open; for(let name=new Blob;;)indexedDB.open=URL.createObjectURL(name)+'= indexedDB.open("' +name+ '",' + '1);'+URL.createObjectURL(name),URL.revokeObjectURL(name)
});

exp2.addEventListener("click", function () {
var hist=location;let url=new Blob(
  ["<title>Classes</title><body onload=\"history.back(1)\">"],{type:'text/html'});
  hist.assign(self.hist+'#'),window.open
  (URL.createObjectURL(url),
  "_top"),
  onbeforeunload=URL.revokeObjectURL(url)
});

exp3.addEventListener("click", function () {

});

// "hiding" the mainframe + X button; it still exists
exit.addEventListener("click", function () {
main.style.display = "none"
exit.style.display = "none"
});

/* automatic hiding via right shift click
document.addEventListener("keyup", function(e){
 var key = e.key + e.location;
 if(key == "Shift2")
   if (main.style.display == "none") {
     main.style.display = '';
   } 
  else {
    main.style.display = "none"
  }
*/
// the komodo logo but encoded in base64. useful for linking images without an actual url/image file (good for single file scripts!)
logo.src = "data:image/png;base64,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";