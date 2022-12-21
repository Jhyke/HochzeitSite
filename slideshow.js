const imageNames = ['HanorFotoOben.jpg', 'HanorFotoWN.jpg', 'lavendel.jpeg'];
let currentPic = 1;

showSlides()

function showSlides() {
    switch(currentPic){
        case 1:
            changeBackground(`img/${imageNames[0]}`);
            currentPic++;
            break;
        case 2:
            changeBackground(`img/${imageNames[1]}`);
            currentPic++;
            break;
        case 3:
            changeBackground(`img/${imageNames[2]}`);
            currentPic = 1;
            break;
        default:
            console.error("Slides not working currentPic: " + currentPic);
            currentPic++;
            break;
    }
    
    setTimeout(showSlides, 5000);
}

function changeBackground(imgPath) {
    const background = document.querySelector('#slideShow');
    background.style.backgroundImage = `url(${imgPath})`;
  }