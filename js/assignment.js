'use strict';

const divArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// shuffle button click listener
document.getElementById('shuffleButton').addEventListener('click', () => {
    shufflingFunction();
    document.getElementById('divContainer').innerHTML = bindingResultDivArray();
});


// sort button click listener
document.getElementById('sortButton').addEventListener('click', () => {
    divArray.sort((a, b) => a - b);
    document.getElementById('divContainer').innerHTML = bindingResultDivArray();
});


// for shuffling div Array
const shufflingFunction = () => {
    let iteration = divArray.length;
    let length = divArray.length;
    const usedDivArray = [];
    const copyDivArray = divArray.slice();
    while (iteration--) {
        const randomIndex = Math.floor(Math.random() * length);
        divArray[iteration] = copyDivArray[usedDivArray[randomIndex] ? usedDivArray[randomIndex] : randomIndex];
        usedDivArray[randomIndex] = usedDivArray[--length] ? usedDivArray[length] : length;
    }
}


// binding result div Array
const bindingResultDivArray = () => {
    let finalHtml = '';
    divArray.forEach((divValue) => {
        finalHtml = finalHtml + '<div id="div'+ divValue + '">' + divValue + '</div>';
    });

    return finalHtml;
}
