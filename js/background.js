const images=["0.jpg", "1.jpg", "2.jpg", 
              "3.jpg", "4.jpg", "5.jpg", 
              "6.jpg", "7.jpg"]


const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// JS에만 존재하던 bgImage를 body 내부에 추가
document.body.appendChild(bgImage);



