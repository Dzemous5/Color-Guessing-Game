let corrContainer;
let boxRGB;
let attempts = 3;

const genClr = () => {
    let boxes = [1, 2, 3, 4, 5, 6];
    let rangeRGB_min = 0;
    let rangeRGB_max = 255;
    let r = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;
    let g = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;
    let b = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;

    document.getElementById('color').innerText = `RGB(${r}, ${g}, ${b})`;
    boxRGB = `rgb(${r}, ${g}, ${b})`

    let boxNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    corrContainer = boxNumber;

    for (i = 0; i < boxes.length; i++){
        if (boxes[i] === boxNumber){
            boxes.splice(i, 1);
        }
    }

        document.getElementById(`box${boxNumber}`).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   
            for(i=0; i < boxes.length; i++){
             
                let r = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;
                let g = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;
                let b = Math.floor(Math.random() * (rangeRGB_max - rangeRGB_min + 1)) + rangeRGB_min;
               
                    document.getElementById(`box${boxes[i]}`).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
}

genClr()

document.querySelectorAll('.box').forEach(el => {
    el.addEventListener('click', () => {
        if(el.style.backgroundColor == boxRGB) {
            alert("You won!")
            genClr();
            attempts = 3;
        }
        else if (el.style.backgroundColor != boxRGB){
            if (attempts <= 3 && ((attempts - 1) >= 1)){
                attempts--;
                alert(`You chose the wrong container, the number of tries remaining is ${attempts}`);
            } 
            else if (attempts == 1){
                alert('You have used all the chances, the game will be restarted after pressing the OK button .');
                attempts = 3;
                genClr();
            }
        }
    })
})