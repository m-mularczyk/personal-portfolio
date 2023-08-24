console.log("Own JS Script loaded");

let bannerButton = document.getElementsByClassName('button')[0].firstChild;
bannerButton.onclick = changeButtonColor;

function changeButtonColor(){
  console.log("button clicked");
  if(bannerButton.style.backgroundColor == "blue"){
    bannerButton.style.backgroundColor = 'yellow';
  } else {
    bannerButton.style.backgroundColor = 'blue';
  }
};
