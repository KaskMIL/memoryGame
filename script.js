const imageArr = ["images/auto.jpeg", "images/auto.jpeg", "images/barco.jpeg", "images/barco.jpeg", "images/cabra.jpeg", "images/cabra.jpeg", "images/gato.jpeg", "images/gato.jpeg", "images/moto.jpeg", "images/moto.jpeg", "images/oveja.jpeg", "images/oveja.jpeg"];


//Function for arrange random position for the images
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function arrangePos(imgArr) {
    const counter = [];
    const posImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    for (let i = 0; i < posImg.length; i++) {
        let condition = true;
        while (condition) {
            let number = randomNum(0, 11);
            if (counter.indexOf(number) == -1) {
                posImg[number] = imgArr[i];
                counter.push(number);
                condition = false;
            }
        }
    }
    return posImg;
}



//elements
const firstImg = document.getElementById("firstImg");
const secongImg = document.getElementById("seconImg");
const thirdImg = document.getElementById("thirdImg");
const fourthImg = document.getElementById("fourthImg");
const fifthImg = document.getElementById("fifthImg");
const sixImg = document.getElementById("sixthImg");
const seventhImg = document.getElementById("seventhImg");
const eigthImg = document.getElementById("eightImg");
const ninethImg = document.getElementById("ninethImg");
const tenthImg = document.getElementById("tenthImg");
const eleventhImg = document.getElementById("eleventhImg");
const twelveImg = document.getElementById("twelvethImg");

const firstBg = document.getElementById("firstBg");

const position = arrangePos(imageArr);
const elemArr = [firstImg, secongImg, thirdImg, fourthImg, fifthImg, sixImg, seventhImg, eigthImg, ninethImg, tenthImg, eleventhImg, twelveImg];

const clicks = {
    firstClick: true,
    secondClick: true
}

firstImg.addEventListener("click", () => {
    if (clicks.firstClick) {
        firstBg.classList.add("hide");
        let img = document.createElement("img");
        img.src = position[0];
        img.id = "deleteOne"
        console.log(img)
        elemArr[0].appendChild(img);
        clicks.firstClick = false;
    } else {
        const imgDel = document.getElementById("deleteOne");
        imgDel.remove();
        firstBg.classList.remove("hide");
        clicks.firstClick = true;
    }

})

console.log(position[0])