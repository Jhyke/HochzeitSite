const imageNames = ['wir.jpg', 'wirKiss.jpg', 'wirSitz.jpg', 'handen.jpg'];
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
            currentPic++;
            break;
        case 4:
            changeBackground(`img/${imageNames[3]}`);
            currentPic = 1;
            break;
        default:
            console.error("Slides not working currentPic: " + currentPic);
            currentPic = 1;
            break;
    }
    
    setTimeout(showSlides, 5000);
}

function changeBackground(imgPath) {
    const background = document.querySelector('#slideShow');
    background.style.backgroundImage = `url(${imgPath})`;
  }